import inputs from "../domains/inputs.js";
import validationUtils from "../utils/validationUtils.js";

const purchaseService = async () => {
  const price = await inputs.inputPrice();
  const verifiedPrice = validationUtils.inputPriceValidate(price);
  return verifiedPrice;
};

export default purchaseService;
