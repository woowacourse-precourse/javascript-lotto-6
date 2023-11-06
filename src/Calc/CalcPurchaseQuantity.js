import { PURCHASE_AMOUNT_UNIT } from "../utils/constants.js";

export const calcPurchaseQuantity = (input) => {
  const PURCHASE_QUANTITY = input / PURCHASE_AMOUNT_UNIT;
  return PURCHASE_QUANTITY;
};
