import { getStockForSku } from "./src/stock-helper";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = async (query: string): Promise<string> =>
  new Promise((resolve) => rl.question(query, resolve));

(async () => {
  try {
    console.log("--- Stock Viewer ---\n");
    const sku = await prompt("Please enter a SKU: ");
    const result = await getStockForSku(sku);
    console.log("\n---");
    console.log(`SKU: ${result.sku}`);
    console.log(`Quantity: ${result.qty}`);
    console.log("---");
  } catch (error: unknown) {
    const err = <Error>error;
    console.log(err.message);
    console.log("Please try again");
  }
  rl.close();
})();
