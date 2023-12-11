# Race Condition PoC

This repo illustrates an issue with metadata in Saleor that might be caused when there are multiple requests made to update the metadata

## Running script

To run the script, you must have [Deno](https://deno.com/) runtime installed.

You must provide the following env variables:

- `SALEOR_API_URL` - URL to Saleor GraphQL API
- `NODE_ID` - ID of the node (e.g. Order, App) in Saleor to update

Then run the script with `deno task start`
