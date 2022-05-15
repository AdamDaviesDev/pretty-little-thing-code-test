import { getStockForSku } from "../stock-helper";

jest.mock("../constants", () => ({
  DATA_DIR: `${__dirname}/data`,
}));

describe("stock-helper", () => {
  describe("getStockForSku", () => {
    it("should return correct stock data when sku exists in both transactions and stock data", async () => {
      await expect(getStockForSku("LTV719449/39/39")).resolves.toEqual({
        qty: 17,
        sku: "LTV719449/39/39",
      });
    });

    it("should throw no stock found error when no stock or transactions for the provided sku exists", async () => {
      await expect(getStockForSku("LTV719449/39/30")).rejects.toEqual(
        new Error("SKU LTV719449/39/30 does not exist in stock or transactions")
      );
    });

    it("should return correct stock data when sku does not exist in stock but exists in transactions", async () => {
      await expect(getStockForSku("DOK019240/66/49")).resolves.toEqual({
        qty: -7,
        sku: "DOK019240/66/49",
      });
    });
  });
});
