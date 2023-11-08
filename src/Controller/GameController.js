import { MissionUtils } from '@woowacourse/mission-utils';
import LottoMachine from '../Model/LottoMachine.js';
import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import WinningLotto from '../Model/WinningLotto.js';
import ResultCalculator from '../Model/ResultCalculator.js';

class GameController {
  #lottoMachine;

  #winningLotto;

  #resultCalculator;

  constructor() {
    this.#lottoMachine = new LottoMachine();
    this.#resultCalculator = new ResultCalculator();
  }

  async play() {
    await this.getMoney();

    this.createLottos();
    this.printLottoInfo();

    await this.getWinningNumbers();

    await this.getBonusNumbers();

    this.calculateResult();
    this.printResult();
  }

  async getMoney() {
    while (true) {
      try {
        const money = await InputView.inputMoney();
        this.#lottoMachine.insertMoney(money);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  createLottos() {
    while (true) {
      try {
        this.#lottoMachine.createLottos();
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  printLottoInfo() {
    OutputView.printNumberOfLottos(this.#lottoMachine.numberOfLottos);
    OutputView.printLottos(this.#lottoMachine.lottos);
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const winningNumber = await InputView.inputWinningNumbers();
        this.#winningLotto = new WinningLotto(winningNumber);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async getBonusNumbers() {
    while (true) {
      try {
        const bonusNumber = await InputView.inputBonusNumber();
        this.#winningLotto.bonusNumber = bonusNumber;
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  calculateResult() {
    this.#resultCalculator.compareLottos(
      this.#lottoMachine.lottos,
      this.#winningLotto,
    );
    this.#resultCalculator.calculateEarningRate(this.#lottoMachine.money);
  }

  printResult() {
    OutputView.printWinningResult(this.#resultCalculator.cntRank);
    OutputView.printEarningRate(this.#resultCalculator.earningRate);
  }
}

export default GameController;
