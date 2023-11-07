import Lotto from '../model/Lotto.js';
import Money from '../model/Money.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import WinningNumberValidator from '../service/WinningNumberValidator.js';
import BonusNumberValidator from '../service/BonusNumberValidator.js'
import { LOTTO, UTILS, RANKING, STATISTICS } from '../common/constants.js';
import { generateRandomNumber, printMessage } from '../common/utils.js';

class LottoController {
  
  #money;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  #ranking;

  #profit;

  constructor () {
    this.#money = 0;
    this.#lottos = [];
    this.#winningNumbers = []; 
    this.#bonusNumber = 0;
    this.#ranking = new Map();
    this.#profit = 0;
    this.#initRankingMap();
  };

  // eslint-disable-next-line max-lines-per-function
  async start () {
    try {
      await this.#getInputMoney();
      const lottoCount = this.#calculateLottoCount();
      this.#createLottos(lottoCount);
      this.#printLottos();
      
      await this.#runGame();
    } catch (error) {
      printMessage(error.message);
    }
  };

  async #getInputMoney () {
    this.#money = new Money(await InputView.getMoney());
  };

  #calculateLottoCount () {
    const lottoCount = this.#money.getAmount() / LOTTO.money_unit;
    OutputView.printLottoCount(lottoCount);
    return lottoCount;
  };

  #createLottos (lottoCount) {
    for (let count = 0; count < lottoCount; count += 1) {
      const generatedNumber = generateRandomNumber(LOTTO.min_number, LOTTO.max_number, LOTTO.max_match);
      this.#lottos.push(new Lotto(generatedNumber));
    }
  };
  
  #printLottos() {
    OutputView.printLottoNumbers(this.#lottos);
  };

  async #runGame() {
    await this.#getWinningNumbers();
    await this.#getBonusNumber();

    this.#compareLotto();
    this.#printStatistics();
    this.#calculateProfit();
    this.#printProfit(); 
  };

  async #getWinningNumbers () {
    const inputNumber = await InputView.getWinningNumbers();
    const winningNumberValidator = new WinningNumberValidator(inputNumber);
    winningNumberValidator.validate();
    
    const lotto = new Lotto(inputNumber.split(UTILS.comma).map(Number));
    this.#winningNumbers = lotto.getNumbers();
  };

  async #getBonusNumber () {
    const inputNumber = await InputView.getBonusNumber();
    const bonusNumbervalidator = new BonusNumberValidator(inputNumber);
    bonusNumbervalidator.validateUnique(this.#winningNumbers);

    this.#bonusNumber = bonusNumbervalidator.validate();
  };

  #compareLotto () {
    this.#lottos.forEach(lotto => {
      const matchedCount = this.#winningNumbers.filter(number => lotto.getNumbers().includes(number)).length;
      const bonus = lotto.getNumbers().includes(this.#bonusNumber);

      this.#calculateRanking(matchedCount, bonus);
    })
  };

  #initRankingMap() {
    Object.keys(RANKING).forEach(key => {
      this.#ranking.set(key, 0)
    })
  };

  #calculateRanking(matchedCount, bonus) {
    Object.entries(RANKING).forEach(([key, rank]) => {
      if (rank.match === matchedCount && rank.bonus === bonus) {
        const existingValue = this.#ranking.get(key);
        this.#ranking.set(key, existingValue + 1);
      }
    });
  };
  
  #printStatistics () {
    const statisticsArray = Array.from(this.#ranking).map(([key, count]) => RANKING[key].message + count + STATISTICS.count);
    const statistics = statisticsArray.join(UTILS.line_break)

    OutputView.printStatistics(statistics);
  };

  #calculateProfit() {
    const moneyAmount = this.#money.getAmount();
    const totalPrize = Array.from(this.#ranking).reduce((total, [key, count]) => {
      const rank = RANKING[key];
      return total + rank.prize * count;
    }, 0);
    this.#profit = (totalPrize / moneyAmount) * 100;
  };  

  #printProfit() {
    OutputView.printProfit(this.#profit);
  };
};

export default LottoController;
