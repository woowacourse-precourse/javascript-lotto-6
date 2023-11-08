import { Random, Console } from '@woowacourse/mission-utils';

import { RANK } from './Constant.js';

class GameManager {
  constructor() {}

  static getRandomNumber() {
    const randomArray = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomArray.sort((a, b) => Number(a) - Number(b));
    return randomArray;
  }

  static splitWinNumber(winNumberArray) {
    const splitNumber = winNumberArray.split(',').map((input) => Number(input));
    return splitNumber;
  }

  static checkResult(lottos, winNumbers, bonusNumber) {
    let earn = 0;
    const totalResult = lottos.map((lotto) =>
      this.changeToRank(lotto.checkMatchNumber(winNumbers, bonusNumber))
    );
    RANK.forEach((rank, index) => {
      const count = totalResult.filter(
        (lottoRank) => lottoRank === rank.result
      ).length;
      Console.print(
        `${rank.match}개 일치${index === 3 ? `, 보너스 볼 일치 ` : ' '}(${
          rank.printMoney
        }원) - ${count}개`
      );
      earn += count * rank.money;
    });
    return earn;
  }

  static changeToRank({ match, bonus }) {
    if (match === 6) return 'one';
    if (match === 5 && bonus) return 'two';
    if (match === 5) {
      return 'three';
    }
    if (match === 4) return 'four';
    if (match === 3) return 'five';
    return null;
  }

  static calculateProfit(earn, money) {
    Console.print(`총 수익률은 ${((earn / money) * 100).toFixed(1)}%입니다.`);
  }
}

export default GameManager;
