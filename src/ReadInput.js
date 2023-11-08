import { Console } from '@woowacourse/mission-utils';
import Validator from './Vaildator.js';

export default class ReadInput {
  static async readPurchaseAmount() {
    while (true) {
      try {
        const purchaseAmount = await Console.readLineAsync(
          '구입금액을 입력해 주세요.\n'
        );
        Validator.validatePurchaseAmount(purchaseAmount);

        return Number(purchaseAmount);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async readWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await Console.readLineAsync(
          '당첨 번호를 입력해 주세요.\n'
        );

        Validator.vaildateWinningNumbers(winningNumbers);
        const winningNumbersArr = winningNumbers.split(',');
        return winningNumbersArr.map((numberString) => Number(numberString));
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  static async readBonusNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await Console.readLineAsync(
          '보너스 번호를 입력해 주세요.\n'
        );

        Validator.vaildateBonusNumber(bonusNumber, winningNumbers);
        return Number(bonusNumber);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}
