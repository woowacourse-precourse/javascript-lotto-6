import { Console } from '@woowacourse/mission-utils';
import { INPUT_QUERY } from '../constants/lotto.js';

class InputView {
  #reader;

  constructor(reader = Console.readLineAsync) {
    this.#reader = reader;
  }

  async readPurchaseAmount() {
    const lottoCount = await this.#reader(INPUT_QUERY.lottoCount);
    return Number(lottoCount);
  }

  async readWinningNumbers() {
    const lottoWinningNumbers = await this.#reader(INPUT_QUERY.winningNumbers);
    const winningNumbers = lottoWinningNumbers.split(',').map((number) => Number(number));

    return winningNumbers;
  }

  async readBounsNumber() {
    const lottoBounsNumber = await this.#reader(INPUT_QUERY.bounsNumber);

    return Number(lottoBounsNumber);
  }
}

export default InputView;
