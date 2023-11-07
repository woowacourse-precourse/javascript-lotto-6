import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Utilities/Constant.js";
import Validator from "../Utilities/Validator.js";

const UserInput = {
  async inputAmount() {
    let lottoAmount;
    try {
      lottoAmount = await Console.readLineAsync(`${MESSAGE.PURCHASE_AMOUNT}\n`);
      lottoAmount = Number(lottoAmount);
      Validator.validateAmount(lottoAmount);
    } catch (error) {
      Console.print(error.message);
      return this.inputAmount();
    }
    return lottoAmount;
  },

  async inputNumber() {
    let lottoNumbersArray;
    try {
      const lottoNumbersInput = await Console.readLineAsync(
        `${MESSAGE.LOTTO_NUMBER}\n`
      );
      lottoNumbersArray = lottoNumbersInput
        .split(/[,\s]+/)
        .map((number) => parseInt(number, 10));
      Validator.validateNumbers(lottoNumbersArray);
    } catch (error) {
      Console.print(error.message);
      return this.inputNumber();
    }
    return lottoNumbersArray;
  },

  async inputBonus(lottoNumbersArray) {
    let bonusNumber;
    try {
      bonusNumber = await Console.readLineAsync(`${MESSAGE.BONUS_NUMBER}\n`);
      bonusNumber = Number(bonusNumber);
      Validator.validateBonusNumber(bonusNumber, lottoNumbersArray);
    } catch (error) {
      Console.print(error.message);
      return this.inputBonus(lottoNumbersArray);
    }
    return bonusNumber;
  },
};

export default UserInput;
