import { Setting } from "../constants/Settings.js";
import { ERROR_MESSAGE } from "../constants/ErrorMessages.js";

export const priceValidation = (price) => {
  price = Number(price);
  if (price % Setting.defaultPrice !== 0) throw new Error(ERROR_MESSAGE.price);
  if (price === 0) throw new Error(ERROR_MESSAGE.zero);
};
