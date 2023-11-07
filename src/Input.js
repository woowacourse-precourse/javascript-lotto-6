import { Console } from "@woowacourse/mission-utils";
import INPUT_MESSAGE from "./constant/inputData.js";

const Input = {
  async readPayment() {
    const payment = await Console.readLineAsync(INPUT_MESSAGE.PAYMENT);
    return payment;
  },
  async readWinningNumber() {
    const winningNumber = await Console.readLineAsync(
      INPUT_MESSAGE.WINNING_NUMBER
    );
    return winningNumber;
  },
  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    return bonusNumber;
  },
};

export default Input;
