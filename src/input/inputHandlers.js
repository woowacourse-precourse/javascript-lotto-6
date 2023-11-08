import inputValidators from "./inputValidators.js";
import { Console } from "@woowacourse/mission-utils";
import { ERROR, MESSAGES } from "../output/constants.js";

const inputHandlers = {
  async inputPayment() {
    let paymentStr;
    while (true) {
      try {
        paymentStr = await Console.readLineAsync(`${MESSAGES.PAYMENT_INPUT}`);
        const paymentNum = Number(paymentStr);
        inputValidators.validatePayment(paymentNum);
        return paymentNum;
      } catch (error) {
        Console.print(`${ERROR.INPUT_ERROR}`);
      }
    }
  },

  async inputWinningNumbers() {
    let winnigNumbersStr;
    while (true) {
      try {
        winnigNumbersStr = await Console.readLineAsync(
          `${MESSAGES.WINNING_NUMBERS_INPUT}`
        );
        const winningNumbersList = winnigNumbersStr.split(",").map(Number);
        inputValidators.validateWinningNumbers(winningNumbersList);
        return winningNumbersList;
      } catch (error) {
        Console.print(`${ERROR.INPUT_ERROR}`);
      }
    }
  },

  async inputBonusNumber(winnigNumbers) {
    let bonusNumberStr;
    while (true) {
      try {
        bonusNumberStr = await Console.readLineAsync(
          `${MESSAGES.BONUS_NUMBER_INPUT}`
        );
        const bonusNumber = Number(bonusNumberStr);
        inputValidators.validateBonusNumber(bonusNumber, winnigNumbers);
        return bonusNumber;
      } catch (error) {
        Console.print(`${ERROR.INPUT_ERROR}`);
      }
    }
  },
};

export default inputHandlers;
