import inputValidators from './inputValidators.js';
import { Console } from '@woowacourse/mission-utils';

const inputHandlers = {
  async inputPayment() {
    let paymentStr;
    try {
      paymentStr = await Console.readLineAsync(
        "구입금액을 입력해 주세요.",
      );
    } catch (error) {
      throw new Error ("[ERROR] 입력 오류");
    }
    const paymentNum = Number(paymentStr);

    inputValidators.validatePayment(paymentNum);

    return paymentNum;
  },

  async inputWinningNumbers() {
    let winnigNumbersStr;
    try {
      winnigNumbersStr = await Console.readLineAsync(
        "당첨 번호를 입력해 주세요.",
      );
    } catch (error) {
      throw new Error ("[ERROR] 입력 오류");
    }
    const winningNumbersList = winnigNumbersStr.split(",").map(Number);

    inputValidators.validateWinningNumbers(winningNumbersList);

    return winningNumbersList;
  },

  async inputBonusNumber(winnigNumbers) {
    let bonusNumberStr;
    try {
      bonusNumberStr = await Console.readLineAsync(
        "당첨 번호를 입력해 주세요.",
      );
    } catch (error) {
      throw new Error ("[ERROR] 입력 오류");
    }
    const bonusNumber = Number(bonusNumberStr);

    inputValidators.validateBonusNumber(bonusNumber, winnigNumbers);

    return bonusNumber;
  }
};

export default inputHandlers;