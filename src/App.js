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

class App {
  #status;

  #amount;

  #lotteries;

  #ui;

  #lottoMachine;

  constructor() {
    this.#status = "purchase";
    this.#amount = 0;
    this.#lotteries = [];
    this.#ui = new UI();
    this.#lottoMachine = new LottoMachine();
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
    return ((winningAmount / this.#amount - 1) * 100).toFixed(1);
  }
}

export default App;
