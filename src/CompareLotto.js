import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, GAME_NUMBER } from './Constants.js';

class CompareLotto {
  constructor(user) {
    this.user = user;
    this.matchingLotto = Array.from({ length: 5 }).fill(0);
  }

  compareLottoNumber() {
    const userLotto = this.user.getUserLotto();

    const matchCount = userLotto.map(
      numbers =>
        numbers.filter(number => this.winningNumber.includes(number)).length,
    );

    this.matchingLottoCount(matchCount, userLotto);
  }

  matchingLottoCount(matchCount, userLotto) {
    matchCount.forEach((count, index) => {
      if (count >= 3 && count !== 5) {
        this.matchingLotto[count - 3] += 1;
      }
      if (count == 5) {
        this.matchingBonusNumber(userLotto[index]);
      }
      if (count == 6) {
        this.matchingLotto[4] += 1;
      }
    });

    this.resultLotto();
  }

  matchingBonusNumber(userLotto) {
    const isBonusMatch = userLotto.includes(this.bonusNumber);

    if (isBonusMatch) {
      this.matchingLotto[3] += 1;
    }
    if (!isBonusMatch) {
      this.matchingLotto[2] += 1;
    }
  }

  resultLotto() {
    Console.print(GAME_MESSAGE.resultLotto);
    Console.print(`3개 일치 (5,000원) - ${this.matchingLotto[0]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.matchingLotto[1]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.matchingLotto[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.matchingLotto[3]}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.matchingLotto[4]}개`);

    this.totalProfit();
  }

  totalProfit() {
    const purchaseAmount = this.user.getPurchaseAmount();
    let totalPrize = 0;
    this.matchingLotto.forEach((count, index) => {
      totalPrize += GAME_NUMBER.prizeNumber[index] * count;
    });
    const profit = ((totalPrize / purchaseAmount) * 100)
      .toFixed(1)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

    Console.print(`총 수익률은 ${profit}%입니다.`);
  }
}

export default CompareLotto;
