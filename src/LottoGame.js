import InputView from './InputView.js';
import { GAME_MESSAGES, LOTTO_PRICE, NUMBER_RANGE } from './constants.js';
import { pickUniqueNumbersInRange, validateMoney } from './utils.js';
import OutputView from './OutputView.js';
import Lotto from './Lotto.js';
import LottoResult from './LottoResult.js';

class LottoGame {
  #count;
  #lottos;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#count = 0;
    this.#lottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = null;
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
    await this.generateRandomNumbers();
  }

  async generateRandomNumbers() {
    for (let i = 0; i < this.#count; i++) {
      const randomTicket = this.generateRandomLotto();
      this.#lottos.push(randomTicket);
    }
    OutputView.printLottoNumbers(this.#lottos);
    await this.setupInputWinningNumbers();
  }

  generateRandomLotto() {
    const randomNumbers = pickUniqueNumbersInRange(
      NUMBER_RANGE.MIN,
      NUMBER_RANGE.MAX,
      NUMBER_RANGE.COUNT
    );
    return randomNumbers.sort((a, b) => a - b);
  }

  async setupInputWinningNumbers() {
    while (true) {
      const userInput = await InputView.inputCommon(
        `\n${GAME_MESSAGES.ENTER_WINNING_NUMBERS}`
      );
      try {
        this.#winningNumbers = new Lotto(userInput);
        break;
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
    this.setupInputBonusNumbers();
  }

  async setupInputBonusNumbers() {
    while (true) {
      const userInput = await InputView.inputCommon(
        `\n${GAME_MESSAGES.ENTER_BONUS_NUMBER}`
      );
      try {
        this.#winningNumbers.validateBonusNumber(userInput);
        this.#bonusNumber = userInput;
        break;
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
    this.calculateResult();
  }

  async calculateResult() {
    const lottoResult = new LottoResult(
      this.#lottos,
      this.#winningNumbers,
      this.#bonusNumber
    );
    OutputView.printResult(lottoResult.getResult());
    const totalSpent = this.#count * LOTTO_PRICE;
    const profitRate = lottoResult.calculateProfitRate(totalSpent);
    OutputView.printProfitRate(profitRate);
  }
}

export default LottoGame;
