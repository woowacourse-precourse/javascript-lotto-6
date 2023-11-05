import { Console } from '@woowacourse/mission-utils';
import { LOTTO_MESSAGE, ERROR_MESSAGE } from './constant.js';
import Lotto from './Lotto.js';
import Statistics from './Statistics.js';

class App {
  async inputMoney() {
    let money;
    try {
      money = await Console.readLineAsync(LOTTO_MESSAGE.MONEY_INPUT);
      if (!Number.isInteger(money) && money % 1000 !== 0) {
        throw new Error(ERROR_MESSAGE.MONEY);
      }
    } catch (error) {
      Console.print(error.message);
      money = await this.inputMoney();
    }
    return money;
  }

  async inputWinningNumbers() {
    let winningNumbers;
    try {
      winningNumbers = (await Console.readLineAsync(LOTTO_MESSAGE.WINNING_INPUT))
        .split(',')
        .map((number) => Number(number));
      if (winningNumbers.length !== 6) {
        throw new Error(ERROR_MESSAGE.THE_NUMBER);
      }
      winningNumbers.forEach((number) => {
        if (!Number.isInteger(number) || number < 1 || number > 45) {
          throw new Error(ERROR_MESSAGE.LOTTO_NUMBER_CONDITION);
        }
      });
    } catch (error) {
      Console.print(error.message);
      winningNumbers = await this.inputWinningNumbers();
    }
    return winningNumbers;
  }

  async inputBonusNumber() {
    let bonusNumber;
    try {
      bonusNumber = Number(await Console.readLineAsync(LOTTO_MESSAGE.BONUS_INPUT));
      if (!Number.isInteger(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
        throw new Error(ERROR_MESSAGE.MONEY);
      }
    } catch (error) {
      Console.print(error.message);
      bonusNumber = await this.inputBonusNumber();
    }
    return bonusNumber;
  }

  async play() {
    const lottos = [];
    const money = await this.inputMoney();
    const numberOfLotto = money / 1000;
    Console.print(`${numberOfLotto}개를 구매했습니다.`);
    for (let i = 0; i < numberOfLotto; i += 1) {
      const lotto = new Lotto(Lotto.createLottoNumbers());
      lotto.printNumbers();
      lottos.push(lotto.getNumbers());
    }
    const winningNumbers = await this.inputWinningNumbers();
    const bonusNumber = await this.inputBonusNumber();
    const statistics = new Statistics(winningNumbers, bonusNumber, lottos);
    statistics.printStatistics();
  }
}

export default App;
