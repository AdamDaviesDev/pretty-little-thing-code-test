# Pretty Little Thing Code Test

This repo contains code for Pretty Little Thing code test. The project contains a function which reads a `stock.json`
and `transactions.json` file and returns the current stock levels for a given SKU by combining the data in these two
files.

The following were the requirements for the function:

- The function must match the following signature: `(sku: string) => Promise<{ sku: string, qty: number }>`.
- The function must read from the `stock` and `transactions` files on each invocation (totals cannot be precomputed)
- The function must throw an error where the SKU does not exist in the `transactions.json` and `stock.json` file
- All code must be adequately tested
- Transactions may exist for SKUs which are not present in `stock.json`. It should be assumed that the starting quantity
  for these is 0.
- Functionality can be split into many files to help keep the project clear and organised.

## Prerequisites

It is assumed that you have npm and node installed with a functioning environment.

## Running

Before running the function install the required dependcies by ruinning:

```shell
npm ci
```

To run the function run the following:

```shell
npm run start
```

## Unit tests

To run the unit test suite run the following:

```shell
npm test
```

## Lint

To run linting against the project run:

```shell
npm run lint
```

To automatically fix any issues run:

```shell
npm run lint:fix
```
