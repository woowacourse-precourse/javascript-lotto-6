import { PURCHASE_AMOUNT_UNIT } from "../constants.js";

export const calcPurchaseQuantity = (input) => {
  const PURCHASE_QUANTITY = input / PURCHASE_AMOUNT_UNIT;
  return PURCHASE_QUANTITY;
};
