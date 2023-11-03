import UI from "./UI.js";
import LottoMachine from "./LottoMachine.js";
import AppError, { ERROR_TYPE } from "./AppError.js";

const WINNING_RESULT_TO_PRICE = {
  three: 5000,
  four: 50000,
  five: 1500000,
  fiveBonus: 30000000,
  six: 2000000000,
};

const reduceToTotalResult = (matchResults) => {
  const result = {
    three: 0,
    four: 0,
    five: 0,
    fiveBonus: 0,
    six: 0,
  };
  matchResults.forEach(({ matchedCount, bonusIncluded }) => {
    if (matchedCount === 3) result.three += 1;
    if (matchedCount === 4) result.four += 1;
    if (matchedCount === 5 && !bonusIncluded) result.five += 1;
    if (matchedCount === 5 && bonusIncluded) result.fiveBonus += 1;
    if (matchedCount === 6) result.six += 1;
  });
  return result;
};

class App {
  #status;

  #amount;

  #lotteries;

  #ui;

  #lottoMachine;

  #winningNumbers;

  #matchResults;

  constructor() {
    this.#status = "purchase";
    this.#amount = 0;
    this.#lotteries = [];
    this.#ui = new UI();
    this.#lottoMachine = new LottoMachine();
    this.#winningNumbers = [];
    this.#matchResults = [];
  }

  async play() {
    await this.#transitionEffect();
  }

  async #transition(status) {
    this.#status = status;
    this.#ui.linebreak();
    await this.#transitionEffect();
  }

  async #transitionEffect() {
    try {
      switch (this.#status) {
        case "purchase": {
          await this.#purchaseEffect();
          await this.#transition("winningNumberSetting");
          break;
        }
        case "winningNumberSetting": {
          await this.#winningNumberSettingEffect();
          await this.#transition("bonusNumberSetting");
          break;
        }
        case "bonusNumberSetting": {
          await this.#bonusNumberSettingEffect();
          await this.#transition("result");
          break;
        }
        case "result": {
          await this.#resultEffect();
          break;
        }
        default: {
          break;
        }
      }
    } catch (error) {
      if (error instanceof AppError && error.type === ERROR_TYPE.inputError) {
        this.#ui.print(error.message);
        await this.#transitionEffect();
      } else {
        throw error;
      }
    }
  }

  async #purchaseEffect() {
    const amount = await this.#ui.askAmountForPurchase();
    this.#amount = amount;

    const lotteries = this.#lottoMachine.sell(this.#amount);
    this.#lotteries = lotteries;

    this.#ui.linebreak();

    this.#ui.printLottoPurchaseInformation(
      this.#lotteries.map((lotto) => lotto.getInformation()),
    );
  }

  async #winningNumberSettingEffect() {
    const winningNumbers = await this.#ui.askWinningNumbers();
    this.#winningNumbers = winningNumbers;
  }

  async #bonusNumberSettingEffect() {
    const bonusNumber = await this.#ui.askBonusLottoNumber(
      this.#winningNumbers,
    );
    const matchResults = this.#lotteries.map((lotto) =>
      lotto.checkWinningNumbers(this.#winningNumbers, bonusNumber),
    );
    this.#matchResults = matchResults;
  }

  async #resultEffect() {
    const totalResult = reduceToTotalResult(this.#matchResults);
    const profitRate = this.#calculateProfitRate(totalResult);
    this.#ui.printStatistics(totalResult, profitRate);
  }

  #calculateProfitRate(totalResult) {
    const winningAmount = Object.keys(WINNING_RESULT_TO_PRICE).reduce(
      (acc, key) => acc + WINNING_RESULT_TO_PRICE[key] * totalResult[key],
      0,
    );
    return ((winningAmount / this.#amount) * 100).toFixed(1);
  }
}

export default App;
