import { readDataFile } from "../file-helper";

jest.mock("../constants", () => ({
  DATA_DIR: `${__dirname}/data`,
}));

describe("file-helper", () => {
  describe("readDataFile", () => {
    it("should read data file successfully", async () => {
      const result = await readDataFile("stock.json");
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toEqual(3);
      result.forEach((value) => {
        expect(Object.keys(value).length).toEqual(2);
        expect(value).toHaveProperty("sku");
        expect(value).toHaveProperty("stock");
      });
    });

    it("should handle error when trying to read file which doesnt exist", async () => {
      await expect(readDataFile("no-file.json")).rejects.toEqual(
        "Unexpected error reading file no-file.json"
      );
    });

    it("should handle error when trying to read invalid file", async () => {
      await expect(readDataFile("invalid.json")).rejects.toEqual(
        "Unexpected error parsing file invalid.json"
      );
    });
  });
});
