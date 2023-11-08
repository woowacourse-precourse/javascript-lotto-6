import { Console } from "@woowacourse/mission-utils";
import InputValidate from "./InputValidate.js";
import { COMMAND } from "./constants.js";

class UserInput {
  static async getUserInput(inputFunction) {
    let userInput;
    while (true) {
      try {
        userInput = await inputFunction();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return userInput;
  }

  static async getPurchaseAmount() {
    const lottoAmount = await Console.readLineAsync(
      `${COMMAND.purchaseAmountMessage}`
    );

    const validatedAmount = InputValidate.validateAmount(lottoAmount);

    return validatedAmount;
  }

  static async getLottoNumbers() {
    Console.print("\n");
    const lottoNumbers = await Console.readLineAsync(
      `${COMMAND.lottoNumbersMessage}`
    );

    InputValidate.validateEmptyLottoNumbers(lottoNumbers);

    const lottoNumberList = lottoNumbers.split(",").map(Number);
    InputValidate.validateLottoNumbers(lottoNumberList);

    return lottoNumberList;
  }

  static async getBonusNumber() {
    Console.print("\n");
    const bonusNumber = await Console.readLineAsync(
      `${COMMAND.bonusNumberMessage}`
    );

    const validatedBonusNumber = InputValidate.validateBonusNumber(bonusNumber);

    return validatedBonusNumber;
  }
}

export default UserInput;
