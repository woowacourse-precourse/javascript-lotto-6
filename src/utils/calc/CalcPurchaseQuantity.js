import { STATIC_NUMBER } from "../../static/Static.js";

const calcPurchaseQuantity = (purchasePrice) => {
  const purchaseQuantity = Number(purchasePrice) / STATIC_NUMBER.pricePerLotto;
  return purchaseQuantity;
};

export { calcPurchaseQuantity };
