import MESSAGES from '../constants/Messages';
import BuyService from '../service/BuyService';
import View from '../utils/View.js';

export default class BuyController {
  async buyLotto() {
    while (true) {
      const balance = await View.getInputByQuestion(MESSAGES.inputBalance);
      try {
        BuyService.buyLotto(balance);
        break;
      } catch (error) {
        View.printOutput(error.message);
      }
    }
  }
}