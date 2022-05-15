export type Transaction = {
  sku: string;
  type: "order" | "refund";
  qty: number;
};
