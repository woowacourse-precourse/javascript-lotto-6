import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import Price from './Price.js';
import {
  CONSOLE_MESSAGE,
  ERROR_MESSAGE,
  LOTTO_PRICE_UNIT,
  MATCH_COUNT,
  NUMBER_RANGE,
  WINNING_PRIZE,
} from './constants.js';

class App {
  async getUserPrice() {
    const priceInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.PROMPT_USER_PRICE
    );
    this.validatePriceInput(priceInput);

    return Number(priceInput);
  }

  validatePriceInput(priceInput) {
    const numberInput = Number(priceInput);

    if (Number.isNaN(numberInput)) {
      throw new Error(ERROR_MESSAGE.FORMAT_ERROR);
    }

    if (!Price.isValidPrice(numberInput)) {
      throw new Error(ERROR_MESSAGE.PRICE_UNIT_ERROR);
    }
  }

  generateLottos(lottoAmount) {
    Console.print(' ');
    let generatedLottos = [];

    for (let i = 0; i < lottoAmount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(
        NUMBER_RANGE.MIN,
        NUMBER_RANGE.MAX,
        6
      );
      numbers.sort((a, b) => a - b);
      generatedLottos.push(numbers);
    }

    return generatedLottos;
  }

  printPurchasedLottos(lottos) {
    Console.print(`${lottos.length}${CONSOLE_MESSAGE.PROMPT_PURCHASED_AMOUNT}`);
    for (let lotto of lottos) {
      Console.print(`[${lotto.join(', ')}]`);
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
    this.checkIsNumber(bonusNumber);
    this.checkIsInteger(bonusNumber);
    this.checkIsNotDuplicate(bonusNumber, lottoNumber);
    this.checkNumberInRange(bonusNumber);
  }

  checkIsNumber(value) {
    if (isNaN(value)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_FORMAT_ERROR);
    }
  }

  checkIsInteger(value) {
    if (value !== parseInt(value)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_INTEGER_FORMAT_ERROR);
    }
  }

  checkIsNotDuplicate(value, lottoNumber) {
    if (lottoNumber.getNumbers().includes(value)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATE_ERROR);
    }
  }

  checkNumberInRange(value) {
    if (value < 1 || value > 45) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_RANGE_ERROR);
    }
  }

  calculateWinningStatistics(lottos, winningNumbers, bonusNumber) {
    const statistics = {
      [MATCH_COUNT.THREE]: { count: 0, prize: WINNING_PRIZE.THREE_MATCH },
      [MATCH_COUNT.FOUR]: { count: 0, prize: WINNING_PRIZE.FOUR_MATCH },
      [MATCH_COUNT.FIVE]: { count: 0, prize: WINNING_PRIZE.FIVE_MATCH },
      [MATCH_COUNT.FIVE_PLUS_BONUS]: {
        count: 0,
        prize: WINNING_PRIZE.FIVE_PLUS_BONUS_MATCH,
      },
      [MATCH_COUNT.SIX]: { count: 0, prize: WINNING_PRIZE.SIX_MATCH },
    };

    lottos.forEach(lotto => {
      this.updateStatistics(lotto, winningNumbers, bonusNumber, statistics);
    });

    return statistics;
  }

  updateStatistics(lotto, winningNumbers, bonusNumber, statistics) {
    const matchCount = this.getMatchCount(lotto, winningNumbers);
    const isBonusMatch = lotto.includes(bonusNumber);

    if (matchCount === MATCH_COUNT.FIVE && isBonusMatch) {
      statistics[MATCH_COUNT.FIVE_PLUS_BONUS].count++;
    } else if (statistics[matchCount]) {
      statistics[matchCount].count++;
    }
  }

  getMatchCount(lotto, winningNumbers) {
    return lotto.filter(number => winningNumbers.has(number)).length;
  }

  displayResults(statistics) {
    Console.print('\n당첨 통계\n---');

    const sortedKeys = Object.keys(statistics).sort((a, b) => {
      const order = [
        MATCH_COUNT.THREE,
        MATCH_COUNT.FOUR,
        MATCH_COUNT.FIVE,
        MATCH_COUNT.FIVE_PLUS_BONUS,
        MATCH_COUNT.SIX,
      ];
      return order.indexOf(a) - order.indexOf(b);
    });

    sortedKeys.forEach(key => {
      const { count, prize } = statistics[key];
      let message = `${key}개 일치`;
      if (key === MATCH_COUNT.FIVE_PLUS_BONUS) {
        message = '5개 일치, 보너스 볼 일치';
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
    try {
      const userPriceInput = await this.getUserPrice();
      const lottoAmount = Price.calculateLottoAmount(userPriceInput);
      const lottos = this.generateLottos(lottoAmount);
      this.printPurchasedLottos(lottos);
      const lottoNumbers = await this.getUserLottoNumbers();
      const bonusNumber = await this.getUserBonusNumber(lottoNumbers);
      this.checkWinLotto(lottos, lottoNumbers, bonusNumber);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
