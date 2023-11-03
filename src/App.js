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
          const amount = await this.#ui.askAmountForPurchase();
          this.#amount = amount;

          const lotteries = this.#lottoMachine.sell(this.#amount);
          this.#lotteries = lotteries;

          this.#ui.linebreak();

          this.#ui.printLottoPurchaseInformation(
            this.#lotteries.map((lotto) => lotto.getInformation()),
          );

          await this.#transition("winningNumberSetting");
          break;
        }
        case "winningNumberSetting": {
          const winningNumbers = await this.#ui.askWinningNumbers();
          this.#winningNumbers = winningNumbers;
          this.#transition("bonusNumberSetting");
          break;
        }
        case "bonusNumberSetting": {
          const bonusNumber = await this.#ui.askBonusLottoNumber(
            this.#winningNumbers,
          );

          const matchResults = this.#lotteries.map((lotto) =>
            lotto.checkWinningNumbers(this.#winningNumbers, bonusNumber),
          );
          this.#matchResults = matchResults;

          this.#transition("result");
          break;
        }
        case "result": {
          const totalResult = reduceToTotalResult(this.#matchResults);
          const profitRate = this.#calculateProfitRate(totalResult);
          this.#ui.printStatistics(totalResult, profitRate);
          break;
        }
        default: {
          break;
        }
      }
    } catch (error) {
      if (error instanceof AppError && error.type === ERROR_TYPE.inputError) {
        this.#ui.print(error.message);
        this.#transitionEffect();
      } else {
        throw error;
      }
    }
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
