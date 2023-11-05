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
    while (true) {
      try {
        purchaseMoney = await InputView.readPurchaseMoney();
        Validator.validateMoney(purchaseMoney);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return this.#issueTicketStage(purchaseMoney);
  }

  #issueTicketStage(purchaseMoney) {
    this.#lottoService = new LottoService(Number(purchaseMoney));
    OutputView.printTickets(this.#lottoService.issueTickets());
    return this.#takeWinningNumberStage();
  }

  async #takeWinningNumberStage() {
    let winningNumbers;
    while (true) {
      try {
        winningNumbers = await InputView.readWinningNumbers();
        Validator.validateNumberForm(winningNumbers);
        this.winningLotto = new Lotto(winningNumbers.split(',').map(Number));
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return this.#takeBonusNumberStage();
  }

  async #takeBonusNumberStage() {
    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await InputView.readBonusNumber();
        Validator.validateBouns(
          this.winningLotto.getWinningNumbers(),
          bonusNumber,
        );
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return this.#checkPrizeStage(
      this.winningLotto.getWinningNumbers(),
      Number(bonusNumber),
    );
  }

  #checkPrizeStage(winningNumbers, bonusNumber) {
    this.#lottoService.calculatePrizeResult(winningNumbers, bonusNumber);
    this.#printResultStage();
  }

  #printResultStage() {
    OutputView.printPrizeTitle();
    OutputView.printPrizeResult(this.#lottoService.getPrize());
    OutputView.printProfitRate(this.#lottoService.calculateProfitRate());
  }
}

export default LottoGameController;
