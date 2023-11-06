import InputView from './InputView.js';
import { GAME_MESSAGES, LOTTO_PRICE, NUMBER_RANGE } from './constants.js';
import { pickUniqueNumbersInRange, validateMoney } from './utils.js';
import OutputView from './OutputView.js';

class LottoGame {
  #count;
  #lottos;

  constructor() {
    this.#count = 0;
    this.#lottos = [];
  }

  async setupInputMoney() {
    while (true) {
      const money = await InputView.inputCommon(
        GAME_MESSAGES.ENTER_PURCHASE_AMOUNT
      );
      try {
        validateMoney(money);
        this.#count = money / LOTTO_PRICE;
        OutputView.printLottoPricePurchased(money);
        break;
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
    this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    for (let i = 0; i < this.#count; i++) {
      const randomTicket = this.generateRandomLotto();
      this.#lottos.push(randomTicket);
    }
    OutputView.printLottoNumbers(this.#lottos);
    this.setupInputWinningNumbers();
  }

  generateRandomLotto() {
    const randomNumbers = pickUniqueNumbersInRange(
      NUMBER_RANGE.MIN,
      NUMBER_RANGE.MAX,
      NUMBER_RANGE.COUNT
    );
    return randomNumbers.sort((a, b) => a - b);
  }
}

export default LottoGame;
