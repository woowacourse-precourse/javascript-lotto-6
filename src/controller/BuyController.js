import MESSAGES from '../constants/Messages.js';
import BuyService from '../service/BuyService.js';
import View from '../utils/View.js';

export default class BuyController {
  #buyService;

  constructor() {
    this.#buyService = new BuyService();
  }

  async buyLotto() {
    while (true) {
      const balance = await View.getInputByQuestion(MESSAGES.inputBalance);
      try {
        this.#buyService.buyLotto(balance);
        break;
      } catch (error) {
        View.printOutput(error.message);
      }
    }
  }

  printLottos() {
    const amount = this.#buyService.getAmount();
    View.printOutput(`\n${amount}${MESSAGES.outputLottoAmount}`);
    const lottos = this.#buyService.getLottos();
    lottos.forEach(lotto => {
      View.printOutput(lotto);
    });
  }
}