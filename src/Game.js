import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE, UNIT, NEW_LINE, RANGE_START, RANGE_END, BALL_NUMBERS, SPLIT_SEPARATOR, INITIAL_RESULT_VALUE, PERCENT, PRECISION_POINT, RESULT, MATCH } from './constant/Constant.js';
import Validation from './validation/Validation.js';
import Lotto from './Lotto.js';

class Game {
  #pricePaid;
  #boughtLottos;
  #winningNumbers;
  #bonusNumber;
  #gameResult;

  constructor() {
    this.#gameResult = {
      three: INITIAL_RESULT_VALUE,
      four: INITIAL_RESULT_VALUE,
      five: INITIAL_RESULT_VALUE,
      bonus: INITIAL_RESULT_VALUE,
      six: INITIAL_RESULT_VALUE
    };
  }

  async play() {
    this.#pricePaid = await this.#setPrice();
    this.#setLottos();
    this.printLottos();
    this.#winningNumbers = await this.#setWinningNumbers();
    this.#bonusNumber = await this.#setBonusNumber();
    this.#setGameResult();
    this.printResult();
  }

  async #setPrice() {
    while (true) {
      try {
        const input = await Console.readLineAsync(MESSAGE.PRICE_INPUT);
        const price = Number(input);
        this.#validatePrice(price);
        return price;
      } catch(err) {
        Console.print(err.message);
      }
    }
  }

  #setLottos() {
    this.#boughtLottos = [];
    Array.from({ length: this.#pricePaid/UNIT }).forEach(() => {
      this.#boughtLottos.push(this.#generateRandomLotto());
    });
  }

  async #setWinningNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync(MESSAGE.LOTTO_INPUT);
        const lotto = new Lotto(input.split(SPLIT_SEPARATOR).map((number) => Number(number)).sort((a, b) => a - b));
        return lotto;
      } catch(err) {
        Console.print(err.message);
      }
    }
  }

  async #setBonusNumber() {
    while (true) {
      try {
        const input = await Console.readLineAsync(MESSAGE.BONUS_INPUT);
        const bonusNumber = Number(input);
        this.#validateBonusNumber(bonusNumber);
        return bonusNumber;
      } catch(err) {
        Console.print(err.message);
      }
    }
  }

  #setGameResult() {
    this.#boughtLottos.forEach((lotto) => {
      const draw = lotto.compareTo(this.#winningNumbers, this.#bonusNumber);
      if (draw === RESULT.THREE) this.#gameResult.three++;
      if (draw === RESULT.FOUR) this.#gameResult.four++;
      if (draw === RESULT.FIVE) this.#gameResult.five++;
      if (draw === RESULT.BONUS) this.#gameResult.bonus++;
      if (draw === RESULT.SIX) this.#gameResult.six++;
    })
  }

  printLottos() {
    Console.print(`${NEW_LINE}${this.#boughtLottos.length}${MESSAGE.BOUGHT_LOTTOS}`);
    this.#boughtLottos.forEach((lotto) => {
      lotto.printLotto();
    });
  }

  printResult() {
    Console.print(MESSAGE.LOTTO_RESULT_PREFIX);
    Console.print(`${MESSAGE.LOTTO_RESULT_THREE}${this.#gameResult.three}${MESSAGE.LOTTO_RESULT_SUFFIX}`);
    Console.print(`${MESSAGE.LOTTO_RESULT_FOUR}${this.#gameResult.four}${MESSAGE.LOTTO_RESULT_SUFFIX}`);
    Console.print(`${MESSAGE.LOTTO_RESULT_FIVE}${this.#gameResult.five}${MESSAGE.LOTTO_RESULT_SUFFIX}`);
    Console.print(`${MESSAGE.LOTTO_RESULT_BONUS}${this.#gameResult.bonus}${MESSAGE.LOTTO_RESULT_SUFFIX}`);
    Console.print(`${MESSAGE.LOTTO_RESULT_SIX}${this.#gameResult.six}${MESSAGE.LOTTO_RESULT_SUFFIX}`);
    Console.print(`${MESSAGE.EARNING_RATE_PREFIX}${this.#calculateEarningRate()}${MESSAGE.EARNING_RATE_SUFFIX}`);
  }

  #validatePrice(price) {
    Validation.isPriceNull(price);
    Validation.isPriceNotNumber(price);
    Validation.isPriceBadUnit(price);
  }

  #validateBonusNumber(bonusNumber) {
    Validation.isBonusNotNumber(bonusNumber);
    Validation.isBonusBadRange(bonusNumber);
  }

  #generateRandomLotto() {
    return new Lotto(Random.pickUniqueNumbersInRange(RANGE_START, RANGE_END, BALL_NUMBERS).sort((a, b) => a - b));
  }

  #calculateEarningRate() {
    const wholePrizeAmount = this.#gameResult.three * MATCH.THREE + 
      this.#gameResult.four * MATCH.FOUR + 
      this.#gameResult.five * MATCH.FIVE + 
      this.#gameResult.bonus * MATCH.BONUS + 
      this.#gameResult.six * MATCH.SIX;
    return (wholePrizeAmount*PERCENT/this.#pricePaid).toFixed(PRECISION_POINT);
  }
};

export default Game;