import { Console } from '@woowacourse/mission-utils';

class CompareLotto {
  constructor(user) {
    this.user = user;
  }

  compareLottoNumber() {
    const userLotto = this.user.getUserLotto();

    const matchCount = userLotto.map(
      numbers =>
        numbers.filter(number => this.winningNumber.includes(number)).length,
    );

    this.matchingLottoCount(matchCount);
  }

  matchingLottoCount(matchCount) {
    const matchingLottoCounts = {
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    };

    matchCount.forEach(count => {
      if (count >= 3) {
        matchingLottoCounts[count] += 1;
      }
    });
  }
}

export default CompareLotto;
