import MESSAGES from '../constants/Messages.js';
import PurchaseService from '../service/PurchaseService.js';
import View from '../utils/View.js';

export default class PurchaseController {
  #purchaseService;

  constructor() {
    this.#purchaseService = new PurchaseService();
  }

  async purchaseLotto() {
    while (true) {
      const balance = await View.getInputByQuestion(MESSAGES.inputBalance);
      try {
        this.#purchaseService.purchaseLotto(balance);
        break;
      } catch (error) {
        View.printOutput(error.message);
      }
    }
  }

  printLottos() {
    const amount = this.#purchaseService.getAmount();
    View.printOutput(`\n${amount}${MESSAGES.outputLottoAmount}`);
    const lottos = this.#purchaseService.printLottos();
    lottos.forEach(lotto => {
      View.printOutput(lotto);
    });
  }

  getLottos() {
    return this.#purchaseService.getLottos();
  }
}
