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
    let purchaseMoney;
    try {
      purchaseMoney = await InputView.readPurchaseMoney();
      Validator.validateMoney(purchaseMoney);
      this.#issueTicketStage(purchaseMoney);
    } catch (error) {
      Console.print(error.message);
    }
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
      this.#takeBonusNumberStage();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async #takeBonusNumberStage() {
    let bonusNumber;
    try {
      bonusNumber = await InputView.readBonusNumber();
      Validator.validateBouns(
        this.winningLotto.getWinningNumbers(),
        bonusNumber,
      );
      this.#checkPrizeStage(
        this.winningLotto.getWinningNumbers(),
        Number(bonusNumber),
      );
    } catch (error) {
      Console.print(error.message);
    }
  }

  #checkPrizeStage(winningNumbers, bonusNumber) {
    this.#lottoService.calculatePrizeResult(winningNumbers, bonusNumber);
    this.#printResultStage();
  }

  #printResultStage() {
    OutputView.printPrizeTitle();
    OutputView.printPrizeResult(this.#lottoService.getPrize());
  }
}

export default LottoGameController;
