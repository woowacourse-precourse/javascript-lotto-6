import { Random, Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE, ERROR_MESSAGE } from './constant.js';
import Lotto from './Lotto.js';

class App {
  static createLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async inputMoney() {
    let money;
    try {
      money = await Console.readLineAsync(LOTTO_MESSAGE.MONEY_INPUT);
      if (money % 1000 !== 0) {
        throw new Error(ERROR_MESSAGE.MONEY);
      }
    } catch (error) {
      Console.print(error.message);
      this.inputMoney();
    }
    return money;
  }

  static calculateStatistics(winningNumber, bonusNumber, lottos) {
    const statistics = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      earningRate: 0,
    };
    let earningMoney = 0;
    lottos.forEach((lotto) => {
      const score = lotto.filter((number) => winningNumber.includes(number)).length;
      if (score === 6) {
        statistics.first += 1;
        earningMoney += 2000000000;
      } else if (score === 5 && lotto.includes(bonusNumber)) {
        statistics.second += 1;
        earningMoney += 30000000;
      } else if (score === 5) {
        statistics.third += 1;
        earningMoney += 1500000;
      } else if (score === 4) {
        statistics.fourth += 1;
        earningMoney += 50000;
      } else if (score === 3) {
        statistics.fifth += 1;
        earningMoney += 5000;
      }
    });
    statistics.earningRate = (earningMoney / (lottos.length * 1000)).toFixed(2);
    return statistics;
  }

  static printStatistics(statistics) {
    Console.print(LOTTO_MESSAGE.WINNING_STATISTICS);
    Console.print(`3개 일치 (5000원) - ${statistics.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${statistics.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${statistics.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${statistics.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${statistics.first}개`);
    Console.print(`총 수익률은 ${statistics.earningRate}%입니다`);
  }

  async play() {
    const lottos = [];
    const money = await this.inputMoney();
    const lottoNumber = money / 1000;
    Console.print(`${lottoNumber}개를 구매했습니다`);
    for (let i = 0; i < lottoNumber; i += 1) {
      const lotto = new Lotto(App.createLotto());
      lotto.printNumbers();
      lottos.push(lotto.getNumbers());
    }
    const winningNumbers = (await Console.readLineAsync(LOTTO_MESSAGE.WINNING_INPUT))
      .split(',')
      .map((number) => Number(number));
    const bonusNumber = Number(await Console.readLineAsync(LOTTO_MESSAGE.BONUS_INPUT));
    const statistics = App.calculateStatistics(winningNumbers, bonusNumber, lottos);
    App.printStatistics(statistics);
  }
}

export default App;
