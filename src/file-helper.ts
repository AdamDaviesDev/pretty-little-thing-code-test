import fs from "fs";
import { DATA_DIR } from "./constants";
import { Item, Transaction } from "./types";

/**
 * Generic function which reads a specified json file from the data directory and parses and returns the result.
 * @param fileName name of the data file to read
 */
export const readDataFile = (
  fileName: string
): Promise<Array<Item | Transaction>> => {
  return new Promise((resolve, reject) => {
    fs.readFile(`${DATA_DIR}/${fileName}`, "utf-8", (error, data) => {
      if (error) {
        const errorMessage = `Unexpected error reading file ${fileName}`;
        console.error(errorMessage, error);
        return reject(`Unexpected error reading file ${fileName}`);
      }

      try {
        return resolve(JSON.parse(data));
      } catch (err) {
        const errorMessage = `Unexpected error parsing file ${fileName}`;
        console.error(errorMessage, err);
        return reject(errorMessage);
      }
    });
  });
};
