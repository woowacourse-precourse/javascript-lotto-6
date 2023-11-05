import Lotto from '../Lotto.js';
import Money from '../model/Money.js';
import InputValidator from '../validator/InputValidator.js';
import convertType from '../utils/convertType.js';
import formatLottoNumbers from '../utils/formatLottoNumbers.js';
import { MESSAGE } from '../constants/messages.js';
import { GAME_RULE } from '../constants/gameRule.js';

class LottoGameController {
  #moneyInstance;
  #winningNumbers;
  #bonusNumber;

  constructor({ lottoTickets, randomNumberGeneration, inputView, outputView }) {
    this.lottoTickets = lottoTickets;
    this.randomNumberGeneration = randomNumberGeneration;
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    while (true) {
      try {
        this.#moneyInstance = await this.createMoneyInstance();
        break;
      } catch (error) {
        this.outputView.print(error);
      }
    }

    this.printPurchaseCount();

    const loopCount = this.#moneyInstance.getPurchaseCount();
    Array.from({ length: loopCount }).forEach(() => {
      const lotto = new Lotto(
        this.generateLottoNumbers().sort((a, b) => a - b),
      );
      this.lottoTickets.addLotto(lotto.getLottoNumbers());
      this.outputView.print(formatLottoNumbers(lotto.getLottoNumbers()));
    });

    while (true) {
      try {
        this.#winningNumbers = await this.getWinningNumbers();
        break;
      } catch (error) {
        this.outputView.print(error);
      }
    }

    while (true) {
      try {
        this.#bonusNumber = await this.getBonusNumber();
        break;
      } catch (error) {
        this.outputView.print(error);
      }
    }
  }

  async getPurchaseAmount() {
    const money = convertType(
      await this.inputView.getUserInputAsync(MESSAGE.INPUT),
    );
    InputValidator.validateMoney(money);
    return money;
  }

  async createMoneyInstance() {
    const money = await this.getPurchaseAmount();
    return new Money(money);
  }

  printPurchaseCount() {
    const purchaseCount = this.#moneyInstance.getPurchaseCount();
    this.outputView.print(`\n${purchaseCount}${MESSAGE.BUY}`);
  }

  generateLottoNumbers() {
    return this.randomNumberGeneration.generateLottoNumber();
  }

  printBuyLottos() {
    // TODO: 구매한 로또 출력 로직 여기로 리팩토링
  }

  async getWinningNumbers() {
    const winningNumbers = await this.inputView.getUserInputAsync(
      MESSAGE.WIN_NUMBER,
    );
    InputValidator.validateWinningNumbers(
      winningNumbers.split(GAME_RULE.SEPARATOR),
    );
    return winningNumbers.split(GAME_RULE.SEPARATOR).map(Number);
  }

  async getBonusNumber() {
    const bonusNumber = await this.inputView.getUserInputAsync(
      MESSAGE.BONUS_NUMBER,
    );
    InputValidator.validateBonusNumber(bonusNumber);
    InputValidator.validateLottoNumbers(bonusNumber, [...this.#winningNumbers]);
    return bonusNumber;
  }
}

export default LottoGameController;
