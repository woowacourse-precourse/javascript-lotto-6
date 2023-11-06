import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  #USER_PRICE;

  #USER_LOTTOS;

  #WINNING_NUMBERS;

  #LOTTOS_MAX;

  constructor() {
    this.#USER_PRICE = 0;
    this.#USER_LOTTOS = [];
    this.#WINNING_NUMBERS = [];
    this.#LOTTOS_MAX = 0;
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
    const MAX_LENGTH = 6;

    if (winningNumber.length !== MAX_LENGTH) {
      throw new Error('[ERROR] 당첨 번호는 6자리 숫자여야 합니다.');
    } else if (new Set(winningNumber).size !== winningNumber.length) {
      throw new Error('[ERROR] 당첨 번호가 중복되었습니다.');
    }

    winningNumber.forEach((number) => {
      if (Number.isNaN(number) || number < 1 || number > 45) {
        throw new Error('[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자여야 합니다.');
      }
    });
  }

  async play() {
    await this.getInputPrice();
    await this.getInputWinningNumber();
  }
}

export default App;
