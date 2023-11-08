import { LOTTO, UTILS } from '../common/constants.js';

import { printMessage } from '../common/utils.js';
import Lotto from '../Lotto.js';
import Money from '../model/Money.js';
import BonusNumberValidator from '../service/BonusNumberValidator.js';
import LottoService from '../service/LottoService.js';
import WinningNumberValidator from '../service/WinningNumberValidator.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  
  #money;

  #winningNumbers;

  #bonusNumber;

  #lottoService;

  constructor() {
    this.#money = 0;
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
    this.#lottoService = new LottoService();
  }

  async start() {
    const startGame = async () => {
      try {
        await this.#initGame();
        await this.#runGame();
      } catch (error) {
        printMessage(error.message);
        await startGame();
      }
    }
    await startGame();
  };

  async #initGame() {
    await this.#getInputMoney();

    const lottoCount = this.#calculateLottoCount();
    this.#lottoService.generateLottos(lottoCount);
    
    this.#printLottos();
  }

  async #getInputMoney() {
    this.#money = new Money(await InputView.getMoney());
  };

  #calculateLottoCount() {
    const lottoCount = this.#money.getAmount() / LOTTO.money_unit;
    OutputView.printLottoCount(lottoCount);
    return lottoCount;
  };

  #printLottos() {
    OutputView.printLottoNumbers(this.#lottoService.getLottos());
  };

  async #runGame() {
    await this.#getWinningNumbers();
    await this.#getBonusNumber();

    this.#lottoService.compareLotto(this.#winningNumbers, this.#bonusNumber);
    this.#printStatistics();
    
    this.#lottoService.calculateProfit(this.#money.getAmount());
    this.#printProfit();
  };

  async #getWinningNumbers() {
    const validateWinningNumbers = async () => {
      try {
        const inputNumber = await InputView.getWinningNumbers();
        const winningNumberValidator = new WinningNumberValidator(inputNumber);
        winningNumberValidator.validate();
        const lotto = new Lotto(inputNumber.split(UTILS.comma).map(Number));
        this.#winningNumbers = lotto.getNumbers();
      } catch (error) {
        printMessage(error.message);
        await validateWinningNumbers();
      }
    };
    await validateWinningNumbers();
  };

  async #getBonusNumber() {
    const validateBonusNumber = async () => {
      try {
        const inputNumber = await InputView.getBonusNumber();
        const bonusNumberValidator = new BonusNumberValidator(inputNumber);
        this.#bonusNumber = bonusNumberValidator.validate(this.#winningNumbers);
      } catch (error) {
        printMessage(error.message);
        await validateBonusNumber();
      }
    };
    await validateBonusNumber();
  };

  #printStatistics() {
    const statisticsArray = this.#lottoService.getStatisticsArray();
    const statistics = statisticsArray.join(UTILS.line_break);
    
    OutputView.printStatistics(statistics);
  };

  #printProfit() {
    OutputView.printProfit(this.#lottoService.getProfit());
  };
};

export default LottoController;
