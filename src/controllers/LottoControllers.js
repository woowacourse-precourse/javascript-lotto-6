import { Console } from '@woowacourse/mission-utils';
import LottoGame from '../LottoGame.js';
import LottoView from '../views/LottoView.js';
import {
  TICKET_PRICE,
  PRIZE_INFO,
  NUMBERS_COUNT,
} from '../constants/Constants.js';
import { isValidAmount, areNumbersInRange } from '../utils/Utils.js';

class LottoController {
  #lottoGame;

  constructor() {
    this.#lottoGame = new LottoGame();
  }

  async play() {
    try {
      const amount = await this.#getPurchaseAmount();
      this.#lottoGame.purchaseTickets(amount);
      LottoView.displayTickets(this.#lottoGame.getLottos());

      const winningNumbers = await this.#getWinningNumbers();
      const bonusNumber = await this.#getBonusNumber();
      this.#lottoGame.setWinningNumbers(winningNumbers);
      this.#lottoGame.setBonusNumber(bonusNumber);

      const results = this.#lottoGame.calculateResults();
      LottoView.displayResults(results);

      const profitRate = this.#calculateProfitRate(amount, results);
      LottoView.displayProfitRate(profitRate);
    } catch (error) {
      Console.print(error.message);
      // Optionally restart the game or exit
    }
  }

  async #getPurchaseAmount() {
    const input = await Console.readLineAsync(
      '구입금액을 입력해 주세요. (1000원 단위)\n',
    );
    const amount = Number(input);
    if (!isValidAmount(amount)) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.');
    }
    return amount;
  }

  async #getWinningNumbers() {
    const input = await Console.readLineAsync(
      '당첨 번호를 입력해 주세요. (쉼표로 구분하여 입력)\n',
    );
    const numbers = input.split(',').map((num) => Number(num.trim()));
    if (
      numbers.length !== NUMBERS_COUNT ||
      !areNumbersInRange(numbers, MIN_NUMBER, MAX_NUMBER)
    ) {
      throw new Error('[ERROR] 잘못된 당첨 번호입니다. 다시 입력해주세요.');
    }
    return numbers;
  }

  async #getBonusNumber() {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    const number = Number(input.trim());
    if (!areNumbersInRange([number], MIN_NUMBER, MAX_NUMBER)) {
      throw new Error('[ERROR] 잘못된 보너스 번호입니다. 다시 입력해주세요.');
    }
    return number;
  }

  #calculateProfitRate(amount, results) {
    const totalPrize = results.reduce((acc, curr) => acc + curr.prize, 0);
    return ((totalPrize - amount) / amount) * 100;
  }
}

export default LottoController;
