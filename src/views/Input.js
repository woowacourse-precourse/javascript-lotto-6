import { Console } from "@woowacourse/mission-utils";
import { exceptionType, message } from "../constants";

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

  validate: function (type, value) {
    if (value === "") throw new Error(error.IS_EMPTY);

    const number = Number(value);

    switch (type) {
      case exceptionType.PURCHASE:
        if (isNaN(number)) throw new Error(error.NOT_NUMBER);
      case exceptionType.LOTTO:
        // 숫자가 아닌 문자를 입력함
        if (isNaN(number)) throw new Error(error.NATURAL_NUMBER_IN_RANGE);
    }
  },
};

export default input;
