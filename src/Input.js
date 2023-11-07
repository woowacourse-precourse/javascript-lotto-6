import { Console } from '@woowacourse/mission-utils';

class Input {
  async askPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync(
      '구입금액을 입력해 주세요.'
    );

    return purchaseAmount;
  }

  async askLotteryNumbers() {
    const lotteryNumbers = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요.'
    );

    return lotteryNumbers.split(',');
  }

  async askLotteryBonusNumber() {
    const lotteryBonusNumber = await Console.readLineAsync(
      '보너스 번호를 입력해 주세요.'
    );

    return lotteryBonusNumber;
  }
}

export default Input;
