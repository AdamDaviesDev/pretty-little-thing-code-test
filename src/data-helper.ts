import { readDataFile } from "./file-helper";
import { Item, Transaction } from "./types";

/**
 * Function which reads stock data and returns an array of items.
 */
export const readStockData = async (): Promise<Array<Item>> =>
  <Promise<Array<Item>>>readDataFile("stock.json");

/**
 * Function which reads transaction data and returns an array of transactions.
 */
export const readTransactionsData = async (): Promise<Array<Transaction>> =>
  <Promise<Array<Transaction>>>readDataFile("transactions.json");
