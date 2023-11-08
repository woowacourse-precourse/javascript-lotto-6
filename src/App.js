import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  #PRICE;

  #USER_PRICE;

  #USER_LOTTOS;

  #WINNING_NUMBERS;

  #LOTTOS_MAX;

  #BONUS_NUMBER;

  #MAX_LENGTH;

  #WINNING_COUNT;

  #TMP_WINNING_COUNT;

  #AWARD_PRICE;

  #RATE_OF_RETURN;

  constructor() {
    this.#PRICE = [2000000000, 30000000, 1500000, 50000, 5000];
    this.#USER_PRICE = 0;
    this.#USER_LOTTOS = [];
    this.#WINNING_NUMBERS = [];
    this.#LOTTOS_MAX = 0;
    this.#BONUS_NUMBER = 0;
    this.#MAX_LENGTH = 6;
    this.#WINNING_COUNT = [0, 0, 0, 0, 0];
    this.#TMP_WINNING_COUNT = [];
    this.#AWARD_PRICE = 0;
    this.#RATE_OF_RETURN = 0;
  }

  async getInputPrice() {
    const USER_INPUT =
      await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    try {
      this.checkInputPrice(parseInt(USER_INPUT, 10));
      this.#USER_PRICE = parseInt(USER_INPUT, 10);
      this.#LOTTOS_MAX = this.#USER_PRICE / 1000;
    } catch (e) {
      Console.print(e);
      this.getInputPrice();
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
      this.getInputWinningNumber();
    }
  }

  makeWinningNumberArray(winningNumberArray) {
    winningNumberArray.forEach((number) => {
      this.#WINNING_NUMBERS.push(parseInt(number, 10));
    });
  }

  checkInputWinningNumber(winningNumber) {
    if (winningNumber.length !== this.#MAX_LENGTH) {
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
    try {
      while (this.#USER_LOTTOS.length < this.#LOTTOS_MAX) {
        this.#USER_LOTTOS.push(new Lotto(this.makeEachLotto()).makeLotto());
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  makeEachLotto() {
    const TMP_LOTTO = [];

    while (TMP_LOTTO.length < this.#MAX_LENGTH) {
      const NUMBER = Random.pickNumberInRange(1, 45);
      if (!TMP_LOTTO.includes(NUMBER)) {
        TMP_LOTTO.push(NUMBER);
      }
    }
    TMP_LOTTO.sort((a, b) => a - b);

    return TMP_LOTTO;
  }

  printLottoArray() {
    Console.print(`${this.#LOTTOS_MAX}개를 구매했습니다.`);
    this.#USER_LOTTOS.forEach((lotto) => {
      Console.print(this.printEachLotto(lotto));
    });
  }

  printEachLotto(lotto) {
    let tmpString = '[';

    for (let i = 0; i < lotto.length; i += 1) {
      if (i === lotto.length - 1) {
        tmpString += `${lotto[i]}]`;
      } else if (i !== lotto.length - 1) {
        tmpString += `${lotto[i]}, `;
      }
    }

    return tmpString;
  }

  checkLotto() {
    this.#USER_LOTTOS.forEach((userLotto, index) => {
      this.checkEachLotto(userLotto, index);
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

  //   3개 일치 (5,000원) - 1개
  // 4개 일치 (50,000원) - 0개
  // 5개 일치 (1,500,000원) - 0개
  // 5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
  // 6개 일치 (2,000,000,000원) - 0개
  // 총 수익률은 62.5%입니다.
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

  

  async play() {
    await this.getInputPrice();
    this.makeLottoArray();
    Console.print(this.#USER_LOTTOS);
    await this.getInputWinningNumber();
    await this.getInputBonusNumber();

    this.printLottoArray();
    this.checkLotto();
    this.calculateResults();
    Console.print(this.#RATE_OF_RETURN.toFixed(2));
  }
}

export default App;
