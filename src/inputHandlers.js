import inputValidators from './inputValidators.js';
import { Console } from '@woowacourse/mission-utils';

const inputHandlers = {
  async inputPayment() {
    let paymentStr;
    while (true) {
      try {
        paymentStr = await Console.readLineAsync(
          "구입금액을 입력해 주세요.",
        );
        const paymentNum = Number(paymentStr);
        inputValidators.validatePayment(paymentNum);  
        return paymentNum;
      } catch (error) {
        Console.print("[ERROR] 입력 오류");
      }
    }
  },

  async inputWinningNumbers() {
    let winnigNumbersStr;
    while (true) {
      try {
        winnigNumbersStr = await Console.readLineAsync(
          "당첨 번호를 입력해 주세요.",
        );
        const winningNumbersList = winnigNumbersStr.split(",").map(Number);
        inputValidators.validateWinningNumbers(winningNumbersList);
        return winningNumbersList;
      } catch (error) {
        Console.print("[ERROR] 입력 오류");
      }
    }
  },

  async inputBonusNumber(winnigNumbers) {
    let bonusNumberStr;
    while (true) {
      try {
        bonusNumberStr = await Console.readLineAsync(
          "보너스 번호를 입력해 주세요.",
        );
        const bonusNumber = Number(bonusNumberStr);
        inputValidators.validateBonusNumber(bonusNumber, winnigNumbers);
        return bonusNumber;
      } catch (error) {
        Console.print("[ERROR] 입력 오류");
      }
    }
  }
};

export default inputHandlers;