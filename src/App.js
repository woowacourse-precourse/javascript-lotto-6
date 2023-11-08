import {
  INPUT_MESSAGE,
  INPUT_ERROR_MESSAGE,
  SYMBOL,
  RESULT_MESSAGE,
} from './constants/constants';
import Lotto from './Lotto';
import { Console } from '@woowacourse/mission-utils';
import {
  validatePurchasingAmount,
  validateWinningNumbers,
  validateBonusNumber,
} from './Validation';
import { getRandomNumbers } from './Utils';

class App {
  lottoCount;
  lottoList = [];
  winningNumbers = [];
  bonusNumber;
  purchaseAmount;

  async play() {
    try {
      await this.inputPurchaseAmount();
      this.purchaseLottos();
      this.printAllLottos();
      await this.inputWinningNumbers();
      await this.inputBonusNumber();
      this.calculateResult();
    } catch (err) {
      Console.print(err.message);
      await this.play();
    }
  }

  async inputPurchaseAmount() {
    Console.print(INPUT_MESSAGE.PURCHASING_AMOUNT);
    const purchasingAmount = await Console.readLineAsync('');
    this.purchaseAmount = validatePurchasingAmount(
      purchasingAmount,
      INPUT_ERROR_MESSAGE,
    );
    this.lottoCount = this.purchaseAmount / 1000;
  }

  purchaseLottos() {
    for (let i = 0; i < this.lottoCount; i++) {
      const randomNumbers = getRandomNumbers();
      this.lottoList.push(new Lotto(randomNumbers));
    }
  }

  printAllLottos() {
    Console.print(`${this.lottoList.length}${INPUT_MESSAGE.PURCHASE_LOTTO}`);
    this.lottoList.forEach(el => {
      el.print();
    });
  }

  async inputWinningNumbers() {
    Console.print(INPUT_MESSAGE.WINNING_NUMBERS);
    const winningNumbers = await Console.readLineAsync('');
    this.winningNumbers = validateWinningNumbers(
      winningNumbers,
      SYMBOL.COMMA,
      INPUT_ERROR_MESSAGE,
    );
  }

  async inputBonusNumber() {
    Console.print(INPUT_MESSAGE.BONUS_NUMBER);
    const bonusNumber = await Console.readLineAsync('');
    this.bonusNumber = validateBonusNumber(
      bonusNumber,
      this.winningNumbers,
      INPUT_ERROR_MESSAGE,
    );
  }

  calculateResult() {
    Console.print(INPUT_MESSAGE.WINNING_MESSAGE);
    Console.print(SYMBOL.DIVIDER);
    this.calculateMatchedNumber();
  }

  calculateMatchedNumber() {
    let threeSame = 0;
    let fourSame = 0;
    let fiveSame = 0;
    let fiveSameAndBonusMatch = 0;
    let sixSame = 0;

    this.lottoList.forEach(lottoNumbers => {
      const matchedCount = lottoNumbers.returnSameCount(
        this.winningNumbers,
        this.bonusNumber,
      );

      switch (matchedCount) {
        case 3:
          threeSame++;
          break;
        case 4:
          fourSame++;
          break;
        case 5:
          fiveSame++;
          break;
        case 6:
          sixSame++;
          break;
        case 7:
          fiveSameAndBonusMatch++;
          break;
      }
    });
    Console.print(`${RESULT_MESSAGE.FIFTH_RESULT_MESSAGE} - ${threeSame}개`);
    Console.print(`${RESULT_MESSAGE.FOURTH_RESULT_MESSAGE} - ${fourSame}개`);
    Console.print(`${RESULT_MESSAGE.THIRD_RESULT_MESSAGE} - ${fiveSame}개`);
    Console.print(
      `${RESULT_MESSAGE.SECOND_RESULT_MESSAGE} - ${fiveSameAndBonusMatch}개`,
    );
    Console.print(`${RESULT_MESSAGE.FIRST_RESULT_MESSAGE} - ${sixSame}개`);
    this.calculateRevenueRate({
      threeSame,
      fourSame,
      fiveSame,
      fiveSameAndBonusMatch,
      sixSame,
    });
  }

  calculateRevenueRate({
    threeSame,
    fourSame,
    fiveSame,
    fiveSameAndBonusMatch,
    sixSame,
  }) {
    const totalRevenue =
      threeSame * 5000 +
      fourSame * 50000 +
      fiveSame * 1500000 +
      fiveSameAndBonusMatch * 30000000 +
      sixSame * 2000000000;
    const revenueRate = Number((totalRevenue / this.purchaseAmount) * 100);

    Console.print(`총 수익률은 ${revenueRate}%입니다.`);
  }
}

export default App;
