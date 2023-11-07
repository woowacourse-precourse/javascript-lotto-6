import { Console } from "@woowacourse/mission-utils";
import { error, inputType, message } from "../constants.js";
import { throwErrorIf } from "../utils/index.js";

const inputView = {
  enterPurchaseAmount: async function () {
    const amount = await Console.readLineAsync(message.ENTER_PURCHASE_AMOUNT);

    try {
      this.validate(inputType.PURCHASE, amount);
    } catch (error) {
      Console.print(error.message);
      await this.enterPurchaseAmount();
    }

    return Number(amount);
  },

  enterWinningNumber: async function () {
    const numbers = await Console.readLineAsync(message.ENTER_WINNING_NUMBER);

    return await Promise.all(
      numbers
        .split(",")
        .map(async (number) => await this.returnValidNumber(number))
    );
  },

  returnValidNumber: async function (number) {
    try {
      this.validate(inputType.LOTTO, number);
      return Number(number);
    } catch (error) {
      Console.print(error.message);
      await this.enterWinningNumber();
    }
  },

  enterBonusNumber: async function () {
    const number = await Console.readLineAsync(message.ENTER_BONUS_NUMBER);

    try {
      this.validate(inputType.LOTTO, number);
    } catch (error) {
      Console.print(error.message);
      await this.enterBonusNumber();
    }

    return Number(number);
  },

  validate: function (type, value) {
    throwErrorIf(value.length === 0, error.IS_EMPTY);

    const isNotNumber = isNaN(Number(value));

    switch (type) {
      case inputType.PURCHASE:
        throwErrorIf(isNotNumber, error.NOT_NUMBER);
      case inputType.LOTTO:
        throwErrorIf(isNotNumber, error.NATURAL_NUMBER_IN_RANGE);
    }
  },
};

export default inputView;
