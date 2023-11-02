import MESSAGES from '../constants/Messages.js';
import Validator from '../utils/Validator.js';
import View from '../utils/View.js';

class LottoController {
  #Lottos
  
  constructor() {
    this.#Lottos = [];
  }

  async run() {
    await this.#buyLottos()
  }

  async #buyLottos() {
    const valance = await View.getInputByQuestion(MESSAGES.inputBalance);
    Validator.isValidValance(valance);
    const lottoAmount = Number(valance) / 1000;
    return lottoAmount;
  }
}

export default LottoController;
