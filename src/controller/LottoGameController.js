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
    return this.#issueTicketStage(purchaseMoney);
  }

  #issueTicketStage(purchaseMoney) {
    this.#lottoService = new LottoService(Number(purchaseMoney));
    OutputView.printTickets(this.#lottoService.issueTickets());
    return this.#takeWinningNumberStage();
  }

  async #takeWinningNumberStage() {
    let winningNumbers;
    let winningLotto;
    while (true) {
      try {
        winningNumbers = await InputView.readWinningNumbers();
        Validator.validateNumberForm(winningNumbers);
        winningLotto = new Lotto(winningNumbers.split(',').map(Number));
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return this.#takeBonusNumberStage(winningLotto);
  }

  async #takeBonusNumberStage(winningLotto) {
    const bonusNumber = await InputView.readBonusNumber(winningLotto);
    return this.#checkPrizeStage(
      winningLotto.getWinningNumbers(),
      Number(bonusNumber),
    );
  }

  #checkPrizeStage(winningNumbers, bonusNumber) {
    const prize = this.#lottoService.calculatePrizeResult(
      winningNumbers,
      bonusNumber,
    );
    this.#printResultStage(prize);
  }

  #printResultStage(prize) {
    OutputView.printPrizeTitle();
    OutputView.printPrizeResult(prize);
    OutputView.printProfitRate(this.#lottoService.calculateProfitRate());
  }
}

export default LottoGameController;
