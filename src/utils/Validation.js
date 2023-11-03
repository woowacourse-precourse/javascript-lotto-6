import { Setting } from "../constants/Settings.js";
import { ERROR_MESSAGE } from "../constants/ErrorMessages.js";

export const priceValidation = (price) => {
  price = Number(price);
  if (price % Setting.defaultPrice !== 0) throw new Error(ERROR_MESSAGE.price);
  if (price === 0) throw new Error(ERROR_MESSAGE.zero);
};

export const numberValidation = (list) => {
  const uniqueList = new Set(list);
  if (uniqueList.size !== list.length) throw new Error(ERROR_MESSAGE.duplicate);

  if (uniqueList.size !== Setting.max_input)
    throw new Error(ERROR_MESSAGE.max_input);

  uniqueList.forEach((input) => {
    if (!Setting.lotto_Number_Reg.test(input))
      throw new Error(ERROR_MESSAGE.number);
  });
};

export const bonusNubmerValidation = (number, numberList) => {
  if (!Setting.lotto_Number_Reg.test(number))
    throw new Error(ERROR_MESSAGE.number);

  if (numberList.includes(number)) throw new Error(ERROR_MESSAGE.bonus_number);
};
