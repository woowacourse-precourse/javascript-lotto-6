import { Console } from "@woowacourse/mission-utils";
import { message } from "../constants";

const input = {
  enterPurchaseAmount: async function () {
    return await Console.readLineAsync(message.ENTER_PURCHASE_AMOUNT);
  },

  enterWinningNumber: async function () {
    const numbers = await Console.readLineAsync(message.ENTER_WINNING_NUMBER);

    numbers.forEach((number) => {
      this.validate(number);
    });

    return numbers.map((number) => Number(number));
  },

  enterBonusNumber: async function () {
    const number = await Console.readLineAsync(message.ENTER_BONUS_NUMBER);
    this.validate(number);

    return convertedNumber;
  },

  validate: function (str) {
    // 숫자가 아닌 문자를 입력함
    const number = Number(str);
    if (isNaN(number)) throw new Error(error.NATURAL_NUMBER_IN_RANGE);
  },
};

export default input;
