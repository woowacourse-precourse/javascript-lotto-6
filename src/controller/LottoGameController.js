import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import LottoService from '../service/LottoService.js';
import Validator from '../utils/Validator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class LottoGameController {
  #lottoService;

  async run() {
    await this.#takePurchaseMoneyStage();
  }

  async #takePurchaseMoneyStage() {
    const purchaseMoney = await InputView.readPurchaseMoney();
    this.#issueTicketStage(purchaseMoney);
  }

  #issueTicketStage(purchaseMoney) {
    this.#lottoService = new LottoService(Number(purchaseMoney));
    OutputView.printTickets(this.#lottoService.issueTickets());
    this.#takeWinningNumberStage();
  }

  async #takeWinningNumberStage() {
    let winningNumbers;
    try {
      winningNumbers = await InputView.readWinningNumbers();
      Validator.validateNumberForm(winningNumbers);
      this.winningLotto = new Lotto(winningNumbers.split(',').map(Number));
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default LottoGameController;
