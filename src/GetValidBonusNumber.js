import { validateBonusNumber } from "./ValidateInput/ValidateBonusNumber.js";
import { Console } from "@woowacourse/mission-utils";

export const getValidBonusNumber = async () => {
  while (true) {
    try {
      const input = await Console.readLineAsync("");
      validateBonusNumber(input);
      return input;
    } catch (error) {
      Console.print(error.message);
    }
  }
};
