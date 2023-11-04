import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant.js";

const UserInput = {
  async inputAmount() {
    const lottoAmount = await Console.readLineAsync(
      `${MESSAGE.PURCHASE_AMOUNT}\n`
    );
    return Number(lottoAmount);
  },

  async inputNumber() {
    const lottoNumber = await Console.readLineAsync(
      `${MESSAGE.LOTTO_NUMBER}\n`
    );
    return Number(lottoNumber);
  },

  async inputBonus() {
    const bonusNumber = await Console.readLineAsync(
      `${MESSAGE.BONUS_NUMBER}\n`
    );
    return Number(bonusNumber);
  },
};

export default UserInput;
