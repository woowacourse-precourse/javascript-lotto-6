import { Console } from "@woowacourse/mission-utils";
import { error, exceptionType, message } from "../constants.js";
import { throwErrorIf } from "../utils/index.js";

const inputView = {
  enterPurchaseAmount: async function () {
    let input = "";

    while (true) {
      const amount = await Console.readLineAsync(message.ENTER_PURCHASE_AMOUNT);

      try {
        this.validate(exceptionType.PURCHASE, amount);
        input = Number(amount);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return input;
  },

  enterWinningNumber: async function () {
    let input = "";

    while (true) {
      const numbers = await Console.readLineAsync(message.ENTER_WINNING_NUMBER);
      const splited = numbers.split(",");

      try {
        input = splited.map((number) => {
          this.validate(exceptionType.LOTTO, number);

          return Number(number);
        });
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return input;
  },

  enterBonusNumber: async function () {
    let input = "";

    while (true) {
      const number = await Console.readLineAsync(message.ENTER_BONUS_NUMBER);

      try {
        this.validate(exceptionType.LOTTO, number);
        input = Number(number);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return input;
  },

  validate: function (type, value) {
    throwErrorIf(value.length === 0, error.IS_EMPTY);

    const isNotNumber = isNaN(Number(value));

    switch (type) {
      case exceptionType.PURCHASE:
        throwErrorIf(isNotNumber, error.NOT_NUMBER);
      case exceptionType.LOTTO:
        throwErrorIf(isNotNumber, error.NATURAL_NUMBER_IN_RANGE);
    }
  },
};

export default inputView;
