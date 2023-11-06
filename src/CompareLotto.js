import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';

class CompareLotto {
  constructor(user) {
    this.user = user;
    this.matchingLotto = [0, 0, 0, 0, 0];
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
    const resultMessege = [
      '3개 일치 (5,000원) -',
      '4개 일치 (50,000원) -',
      '5개 일치 (1,500,000원) -',
      '5개 일치, 보너스 볼 일치 (30,000,000원) -',
      '6개 일치 (2,000,000,000원) -',
    ];

    Console.print(GAME_MESSAGE.resultLotto);

    this.matchingLotto.forEach((count, index) => {
      Console.print(`${resultMessege[index]} ${count}개`);
    });
  }
}

export default CompareLotto;
