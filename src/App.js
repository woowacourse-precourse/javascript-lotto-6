import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Price from './Price.js';
import {
  CONSOLE_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_PRICE_UNIT,
} from './constants.js';

class App {
  async getUserPrice() {
    const priceInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.PROMPT_USER_PRICE
    );
    if (!Price.isValidPrice(priceInput)) {
      throw new Error(
        isNaN(priceInput)
          ? ERROR_MESSAGE.FORMAT_ERROR
          : ERROR_MESSAGE.PRICE_UNIT_ERROR
      );
    }
    const price = Number(priceInput);
    return price;
  }

  generateLottos(lottoAmount) {
    Console.print(' ');
    let generatedLottos = [];

    for (let i = 0; i < lottoAmount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      generatedLottos.push(numbers);
    }

    return generatedLottos;
  }

  printPurchasedLottos(lottos) {
    Console.print(`${lottos.length}${CONSOLE_MESSAGE.PROMPT_PURCHASED_AMOUNT}`);
    for (let lotto of lottos) {
      Console.print(lotto);
    }
  }

  async getUserLottoNumbers() {
    Console.print(' ');
    const lottoNumbersInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.PROMPT_USER_LOTTO_NUMBER
    );
    const numbers = lottoNumbersInput.split(',').map(Number);
    const lottoNumber = new Lotto(numbers);
    return lottoNumber;
  }

  async getUserBonusNumber(lottoNumber) {
    Console.print(' ');
    const bonusNumberInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.PROMPT_USER_BONUS_LOTTO_NUMBER
    );

    this.validateBonusNumber(Number(bonusNumberInput), lottoNumber);

    return Number(bonusNumberInput);
  }

  validateBonusNumber(bonusNumber, lottoNumber) {
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_FORMAT_ERROR);
    }
    if (bonusNumber !== parseInt(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_INTEGER_FORMAT_ERROR);
    }
    if (lottoNumber.getNumbers().some(num => num === bonusNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATE_ERROR);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_RANGE_ERROR);
    }
  }

  calculateWinningStatistics(lottos, winningNumbers, bonusNumber) {
    const statistics = {
      3: { count: 0, prize: 5000 },
      4: { count: 0, prize: 50000 },
      5: { count: 0, prize: 1500000 },
      '5+1': { count: 0, prize: 30000000 },
      6: { count: 0, prize: 2000000000 },
    };

    lottos.forEach(lotto => {
      const matchCount = this.getMatchCount(lotto, winningNumbers);
      const isBonusMatch = lotto.includes(bonusNumber);

      if (matchCount === 5 && isBonusMatch) {
        statistics['5+1'].count++;
      } else if (statistics[matchCount]) {
        statistics[matchCount].count++;
      }
    });

    return statistics;
  }

  getMatchCount(lotto, winningNumbers) {
    return lotto.filter(number => winningNumbers.has(number)).length;
  }

  displayResults(statistics) {
    Console.print('\n당첨 통계\n---');

    const sortedKeys = Object.keys(statistics).sort((a, b) => {
      if (a === '5+1') return 1;
      if (b === '5+1') return -1;
      return Number(a) - Number(b);
    });

    sortedKeys.forEach(key => {
      const { count, prize } = statistics[key];
      let message = `${key}개 일치`;
      if (key === '5+1') {
        message += ', 보너스 볼 일치';
      }
      Console.print(`${message} (${prize.toLocaleString()}원) - ${count}개`);
    });
  }

  calculateRateOfReturn(statistics, lottoCount) {
    const totalPrize = Object.values(statistics).reduce(
      (acc, { count, prize }) => acc + count * prize,
      0
    );
    return (totalPrize / (lottoCount * LOTTO_PRICE_UNIT)) * 100;
  }

  checkWinLotto(lottos, lottoNumbers, bonusNumber) {
    const winningNumbers = new Set(lottoNumbers.getNumbers());
    const statistics = this.calculateWinningStatistics(
      lottos,
      winningNumbers,
      bonusNumber
    );

    this.displayResults(statistics);

    const rateOfReturn = this.calculateRateOfReturn(statistics, lottos.length);
    Console.print(`총 수익률은 ${rateOfReturn.toFixed(1)}%입니다.`);
  }

  async play() {
    const userPriceInput = await this.getUserPrice();
    const lottoAmount = Price.calculateLottoAmount(userPriceInput);
    const lottos = this.generateLottos(lottoAmount);
    this.printPurchasedLottos(lottos);
    const lottoNumbers = await this.getUserLottoNumbers();
    const bonusNumber = await this.getUserBonusNumber(lottoNumbers);
    this.checkWinLotto(lottos, lottoNumbers, bonusNumber);
  }
}

export default App;
