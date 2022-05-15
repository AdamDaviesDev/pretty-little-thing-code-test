import { readStockData, readTransactionsData } from "../data-helper";

describe("data-helper", () => {
  describe("readStockData", () => {
    it("should read stock data successfully", async () => {
      const result = await readStockData();
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toEqual(100);
      result.forEach((value) => {
        expect(Object.keys(value).length).toEqual(2);
        expect(value).toHaveProperty("sku");
        expect(value).toHaveProperty("stock");
      });
    });
  });

  describe("readTransactionsData", () => {
    it("should read transactions data successfully", async () => {
      const result = await readTransactionsData();
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toEqual(1100);
      result.forEach((value) => {
        expect(Object.keys(value).length).toEqual(3);
        expect(value).toHaveProperty("sku");
        expect(value).toHaveProperty("qty");
        expect(value).toHaveProperty("type");
      });
    });
  });
});
