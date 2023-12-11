import {
  gql,
  request,
} from "https://deno.land/x/graphql_request@v4.1.0/mod.ts";

const SALEOR_API_URL =
  Deno.env.get("SALEOR_API_URL") ?? "http://localhost:8000/graphql/";
const NODE_ID = Deno.env.get("NODE_ID");
const KEYS_TO_CREATE = 10;

if (!NODE_ID) {
  throw new Error("NODE_ID env var is not set");
}

const mutation = gql`
  mutation UpdateMetdata($id: ID!, $key: String!, $value: String!) {
    updateMetadata(id: $id, input: { key: $key, value: $value }) {
      item {
        metafields
      }
    }
  }
`;

const keys = [...Array(KEYS_TO_CREATE).keys()].map((i) => `key${i}`);

const responses = await Promise.all(
  keys.map(async (key) => {
    return await request(SALEOR_API_URL, mutation, {
      id: NODE_ID,
      key,
      value: `hello from script - ${key}`,
    });
  }),
);

console.log(responses);
