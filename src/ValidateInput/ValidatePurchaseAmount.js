import {
  TYPE_ERROR,
  UNIT_ERROR,
  MIN_INPUT_ERROR,
  PURCHASE_AMOUNT_UNIT,
} from "../utils/constants.js";
import { Console } from "@woowacourse/mission-utils";

export const getValidPurchaseAmount = async () => {
  while (true) {
    try {
      const input = await Console.readLineAsync("");
      validatePurchaseAmount(input);
      return +input;
    } catch (error) {
      Console.print(error.message);
    }
  }
};

const validatePurchaseAmount = (input) => {
  if (!Number(input)) {
    throw new Error(TYPE_ERROR);
  } else if (+input === 0) {
    throw new Error(MIN_INPUT_ERROR);
  } else if (+input % PURCHASE_AMOUNT_UNIT !== 0) {
    throw new Error(UNIT_ERROR);
  }
};
