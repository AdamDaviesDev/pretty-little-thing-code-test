import { readStockData, readTransactionsData } from "./data-helper";
import { Item, Transaction } from "./types";

/**
 * Function which returns the sku and quantity of current stock for a provided SKU.
 * @param sku the stock-keeping unit of the item you wish to get current stock levels for.
 */
export const getStockForSku = async (
  sku: string
): Promise<{ sku: string; qty: number }> => {
  // read files in parallel
  const [stock, transactions]: [Array<Item>, Array<Transaction>] =
    await Promise.all([readStockData(), readTransactionsData()]);
  // find the item which matches the SKU
  const itemForSku = stock.find((item: Item) => item.sku === sku);
  // filer transactions by SKU
  const transactionsForSku = transactions.filter(
    (transaction) => transaction.sku === sku
  );

  // if there is no item or transactions is found for SKU throw error
  if (!itemForSku && !transactionsForSku.length) {
    throw new Error(`SKU ${sku} does not exist in stock or transactions`);
  }

  let qty = itemForSku ? itemForSku.stock : 0;

  // loop through all transactions and update stock quantity
  transactionsForSku.forEach((transaction) => {
    if (transaction.type === "order") {
      qty -= transaction.qty;
    } else if (transaction.type === "refund") {
      qty += transaction.qty;
    }
  });

  return { sku, qty: qty };
};
