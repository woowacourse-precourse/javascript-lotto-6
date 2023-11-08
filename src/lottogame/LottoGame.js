import Lotto from '../Lotto.js';
import Output from '../view/Output.js';
import Input from '../view/Input.js';
import { ERROR, GAME, DISPLAY, RESULT } from '../constant/constant.js';
import buyLotto from './BuyLotto.js';
import LottoController from './LottoController.js';
import { Rank, Profit, ProfitRate } from '../calculation/index.js';

class LottoGame {
  constructor() {
    this.purchaseCost = 0;
    this.matching = [];
    this.profit = 0;
  }

  inputPayMoney(money) {
    try {
      const result = buyLotto(Number(money));
      this.purchaseCost = Number(money);
      Output.text(`${DISPLAY.LINE_BREAK}${result}${GAME.TICKETS_PURCHASED}`);

      return result;
    } catch (e) {
      Output.text(e);
      return this.repeatInput('pay');
    }
  }

  async repeatInput(select) {
    const result = await Input.text('');
    if (select === 'pay') return this.inputPayMoney(result);
    if (select === 'winning') return this.inputWinningNumbers(result);
    if (select === 'bonus') return this.inputBonusNumber(result);
    return true;
  }

  inputWinningNumbers(numbers) {
    try {
      new Lotto(numbers.split(',').map(Number));
      return numbers.split(',').map(Number);
    } catch (e) {
      Output.text(e);
      return this.repeatInput('winning');
    }
  }

  inputBonusNumber(number) {
    try {
      if (!(Number(number) >= 1 && Number(number) <= 45)) throw ERROR.OUT_OF_RANGE;
      return Number(number);
    } catch (e) {
      Output.text(e);
      return this.repeatInput('bonus');
    }
  }

  async startGame() {
    const payMoney = await Input.text(GAME.COST);
    const lottoCount = await this.inputPayMoney(payMoney);

    const lottoController = new LottoController(lottoCount);
    this.showLottoNumber(lottoController);

    const winningNumbers = await Input.text(GAME.INPUT_WINNING_NUMBERS);
    const validateWinningNumbers = await this.inputWinningNumbers(winningNumbers);

    const bonusNumber = await Input.text(`${DISPLAY.LINE_BREAK}${GAME.INPUT_BONUS_NUMBER}`);
    const validateBonusNumber = await this.inputBonusNumber(bonusNumber);

    this.startMatching(lottoController, validateBonusNumber, validateWinningNumbers);
    this.printProfitRate();
  }

  showLottoNumber(numbers) {
    numbers.lottos.forEach((lotto) => Output.text(`[${lotto.printUserLottoNumbers().join(', ')}]`));
    Output.text(DISPLAY.LINE_BREAK);
  }

  startMatching(lotto, bonus, winning) {
    Output.text(`${DISPLAY.LINE_BREAK}${GAME.WINNING_STATS}${DISPLAY.LINE_BREAK}${GAME.SEPARATOR}`);

    lotto.checkIfNumbersMatch(winning);
    lotto.checkIfBonusMatch(bonus);
    const a = lotto.sixnumberResult();
    const b = lotto.bonusResult();

    this.calculateRank(a, b);
    this.getMoney();
    this.printResult();
  }

  calculateRank(lotto, bonus) {
    lotto.forEach((val, i) => this.matching.push(Rank.calculate(val, bonus[i])));
  }

  getMoney() {
    this.matching.forEach((val) => {
      this.profit += Profit.calculate(val);
    });
  }

  printResult() {
    for (let i = 5; i >= 1; i -= 1) {
      Output.text(`${RESULT[i]}${this.checkCount(i)}${DISPLAY.COUNT_UNIT}`);
    }
    return true;
  }

  checkCount(number) {
    const count = this.matching.reduce((acc, val) => (val === number ? acc + 1 : acc), 0);
    return count;
  }

  printProfitRate() {
    Output.text(
      GAME.TOTAL_EARNING_RATE.replace('{}', ProfitRate.calculate(this.purchaseCost, this.profit)),
    );
  }
}

export default LottoGame;
