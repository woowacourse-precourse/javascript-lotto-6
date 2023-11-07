import Input from './Input';
import LottoList from './LottoList';
import Output from './Output';
import Validator from './Validator';
import WinningLotoCounter from './WinningLottoCounter';
import ProfitCalculator from './ProfitCalculator';

class App {
  #input;

  #output;

  #validator;

  #lottoList;

  #winningLottoCounter;

  #profitCalculator;

  constructor() {
    this.#input = new Input();
    this.#output = new Output();
    this.#validator = new Validator();
    this.#lottoList = new LottoList();
    this.#winningLottoCounter = new WinningLotoCounter();
    this.#profitCalculator = new ProfitCalculator();
  }

  async play() {
    const budget = await this.#getBudget();

    this.#lottoList.generateLottoList(budget);
    const lottoList = this.#lottoList.getLottoList();

    this.#output.printLottoList(lottoList);

    const { winningNumber, bonusNumber } = await this.#getWinningCondition();

    this.#winningLottoCounter.countWinningLottos(lottoList, winningNumber, bonusNumber);
    const winningLottoList = this.#winningLottoCounter.getWinningLottoList();

    this.#output.printWinningResult(winningLottoList);

    const profitRate = this.#profitCalculator.getProfitRate(budget, winningLottoList);

    this.#output.printProfitRate(profitRate);
  }

  async #getBudget() {
    const budgetStr = await this.#input.aksUserUntilValid('구입금액을 입력해 주세요.', this.#validator.checkBudgetValidity);
    const budget = budgetStr * 1;
    return budget;
  }

  async #getWinningCondition() {
    const winningNumberStr = await this.#input.aksUserUntilValid('당첨 번호를 입력해 주세요.', this.#validator.checkWinningNumberValidity);
    const bonusNumberStr = await this.#input.aksUserUntilValid('보너스 번호를 입력해 주세요.', this.#validator.checkBonusNumberValidity);
    const winningNumber = winningNumberStr * 1;
    const bonusNumber = bonusNumberStr * 1;
    return { winningNumber, bonusNumber };
  }
}

export default App;
