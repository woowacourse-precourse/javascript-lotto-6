import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  #PRICE;

  #USER_PRICE;

  #USER_LOTTOS;

  #WINNING_NUMBERS;

  #LOTTOS_MAX;

  #BONUS_NUMBER;

  #WINNING_COUNT;

  #TMP_WINNING_COUNT;

  #AWARD_PRICE;

  #RATE_OF_RETURN;

  #MAX_LENGTH;

  constructor() {
    this.#PRICE = [2000000000, 30000000, 1500000, 50000, 5000];
    this.#USER_PRICE = 0;
    this.#USER_LOTTOS = [];
    this.#WINNING_NUMBERS = [];
    this.#LOTTOS_MAX = 0;
    this.#BONUS_NUMBER = 0;
    this.#WINNING_COUNT = [0, 0, 0, 0, 0];
    this.#TMP_WINNING_COUNT = [];
    this.#AWARD_PRICE = 0;
    this.#RATE_OF_RETURN = 0;
    this.#MAX_LENGTH = 6;
  }

  async getInputPrice() {
    const USER_INPUT =
      await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    try {
      this.checkInputPrice(USER_INPUT);
      this.#USER_PRICE = parseInt(USER_INPUT, 10);
      this.#LOTTOS_MAX = this.#USER_PRICE / 1000;
    } catch (e) {
      Console.print(e);
      await this.getInputPrice();
    }
  }

  checkInputPrice(priceInput) {
    if (Number.isNaN(priceInput)) {
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    } else if (priceInput % 1000 !== 0) {
      throw new Error('[ERROR] 금액은 1,000원 단위로 입력해주세요.');
    }
  }

  async getInputWinningNumber() {
    const WINNIG_NUMBER_INPUT =
      await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const TMP_WINNING_NUMBER = WINNIG_NUMBER_INPUT.split(',');

    try {
      this.checkInputWinningNumber(TMP_WINNING_NUMBER);
      this.makeWinningNumberArray(TMP_WINNING_NUMBER);
    } catch (e) {
      Console.print(e);
      await this.getInputWinningNumber();
    }
  }

  makeWinningNumberArray(winningNumberArray) {
    winningNumberArray.forEach((number) => {
      this.#WINNING_NUMBERS.push(parseInt(number, 10));
    });
  }

  checkInputWinningNumber(winningNumber) {
    if (winningNumber.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6자리 숫자여야 합니다.');
    } else if (new Set(winningNumber).size !== winningNumber.length) {
      throw new Error('[ERROR] 당첨 번호가 중복되었습니다.');
    }

    winningNumber.forEach((number) => {
      if (Number.isNaN(number) || number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }
    });
  }

  async getInputBonusNumber() {
    const BONUS_NUMBER_INPUT =
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    try {
      this.checkInputBonusNumber(parseInt(BONUS_NUMBER_INPUT, 10));
      this.#BONUS_NUMBER = parseInt(BONUS_NUMBER_INPUT, 10);
    } catch (e) {
      Console.print(e);
      return this.getInputBonusNumber();
    }
  }

  checkInputBonusNumber(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자여야 합니다.');
    } else if (this.#WINNING_NUMBERS.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.');
    }
  }

  makeLottoArray() {
    Console.print(`${this.#LOTTOS_MAX}개를 구매했습니다.`);
    try {
      while (this.#USER_LOTTOS.length < this.#LOTTOS_MAX) {
        const LOTTO_NUMBERS = Random.pickUniqueNumbersInRange(1, 45, 6);
        LOTTO_NUMBERS.sort((a, b) => a - b);
        const LOTTO = new Lotto(LOTTO_NUMBERS).makeLotto();
        Console.print(this.printEachLotto(LOTTO_NUMBERS));
        this.#USER_LOTTOS.push(LOTTO);
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  printEachLotto(lotto) {
    let tmpString = '[';
    lotto.forEach((number, index) => {
      if (index !== this.#MAX_LENGTH - 1) {
        tmpString += `${number}, `;
      } else if (index === this.#MAX_LENGTH - 1) {
        tmpString += `${number}]`;
      }
    });
    return tmpString;
  }

  checkLotto() {
    this.#USER_LOTTOS.forEach((userLotto) => {
      this.checkEachLotto(userLotto);
    });
  }

  checkEachLotto(eachLotto) {
    let checkBonus = false;
    let winningCount = eachLotto.filter((number) =>
      this.#WINNING_NUMBERS.includes(number),
    ).length;

    if (eachLotto.includes(this.#BONUS_NUMBER)) {
      if (winningCount === 5) {
        checkBonus = true;
      } else if (winningCount < 5) {
        winningCount += 1;
      }
    }
    this.#TMP_WINNING_COUNT.push({ count: winningCount, bonus: checkBonus });
  }

  calculateResults() {
    this.calculateAwardPrice();
    this.#RATE_OF_RETURN =
      ((this.#AWARD_PRICE - this.#USER_PRICE) / this.#USER_PRICE) * 100;
  }

  calculateAwardPrice() {
    this.#TMP_WINNING_COUNT.forEach((result) => {
      if (result.count > 2 && result.count < 6 && !result.bonus) {
        this.#AWARD_PRICE += this.#PRICE[this.#MAX_LENGTH - result.count + 1];
        this.#WINNING_COUNT[this.#MAX_LENGTH - result.count + 1] += 1;
      } else if (result.bonus || result.count === 6) {
        this.#AWARD_PRICE += this.#PRICE[this.#MAX_LENGTH - result.count];
        this.#WINNING_COUNT[this.#MAX_LENGTH - result.count] += 1;
      }
    });
  }

  // "3개 일치 (5,000원) - 1개",
  //     "4개 일치 (50,000원) - 0개",
  //     "5개 일치 (1,500,000원) - 0개",
  //     "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
  //     "6개 일치 (2,000,000,000원) - 0개",
  //     "총 수익률은 62.5%입니다.",

  printLottoResult() {
    Console.print('당첨 통계');
    Console.print('---');

    for (let i = this.#WINNING_COUNT.length - 1; i >= 0; i -= 1) {
      if(i === 4) Console.print(`3개 일치 (5,000원) - ${this.#WINNING_COUNT[i]}개`);
      else if(i === 3) Console.print(`4개 일치 (50,000원) - ${this.#WINNING_COUNT[i]}개`);
      else if(i === 2) Console.print(`5개 일치 (1,500,000원) - ${this.#WINNING_COUNT[i]}개`);
      else if(i === 1) Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#WINNING_COUNT[i]}개`);
      else if(i === 0) Console.print(`6개 일치 (2,000,000,000원) - ${this.#WINNING_COUNT[i]}개`);
    }

    Console.print(`총 수익률은 ${this.#RATE_OF_RETURN}%입니다.`);
  }

  // makeLottoResult(index) {
  //   return

  // }

  async play() {
    await this.getInputPrice();
    this.makeLottoArray();
    await this.getInputWinningNumber();
    await this.getInputBonusNumber();
    this.checkLotto();
    this.calculateResults();
    this.printLottoResult();
  }
}

export default App;
