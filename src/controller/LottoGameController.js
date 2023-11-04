import Lotto from '../Lotto.js';
import Money from '../model/Money.js';
import InputValidator from '../validator/InputValidator.js';
import convertType from '../utils/convertType.js';
import formatLottoNumbers from '../utils/formatLottoNumbers.js';
import { MESSAGE } from '../constants/messages.js';

class LottoGameController {
  #moneyInstance;

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

  printBuyLottos() {}
}

export default LottoGameController;
