import UI from "./UI.js";
import LottoMachine from "./LottoMachine.js";
import AppError, { ERROR_TYPE } from "./AppError.js";
import TotalLottoResult from "./TotalLottoResult.js";

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
    const reenter = this.#status === status;
    this.#status = status;
    this.#ui.linebreak();
    await this.#transitionEffect({ reenter });
  }

  async #transitionEffect({ reenter } = { reenter: false }) {
    try {
      switch (this.#status) {
        case "purchase": {
          await this.#purchaseEffect({ reenter });
          await this.#transition("winningNumberSetting");
          break;
        }
        case "winningNumberSetting": {
          await this.#winningNumberSettingEffect({ reenter });
          await this.#transition("bonusNumberSetting");
          break;
        }
        case "bonusNumberSetting": {
          await this.#bonusNumberSettingEffect({ reenter });
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
        await this.#transitionEffect({ reenter: true });
      } else {
        throw error;
      }
    }
  }

  async #purchaseEffect({ reenter } = { reenter: false }) {
    const amount = await this.#ui.askAmountForPurchase({ again: reenter });
    this.#amount = amount;

    const lotteries = this.#lottoMachine.sell(this.#amount);
    this.#lotteries = lotteries;

    this.#ui.linebreak();

    this.#ui.printLottoPurchaseInformation(
      this.#lotteries.map((lotto) => lotto.getInformation()),
    );
  }

  async #winningNumberSettingEffect({ reenter } = { reenter: false }) {
    const winningNumbers = await this.#ui.askWinningNumbers({ again: reenter });
    this.#winningNumbers = winningNumbers;
  }

  async #bonusNumberSettingEffect({ reenter } = { reenter: false }) {
    const bonusNumber = await this.#ui.askBonusLottoNumber(
      this.#winningNumbers,
      { again: reenter },
    );
    const matchResults = this.#lotteries.map((lotto) =>
      lotto.checkWinningNumbers(this.#winningNumbers, bonusNumber),
    );
    this.#matchResults = matchResults;
  }

  async #resultEffect() {
    const totalResult = new TotalLottoResult(...this.#matchResults);
    const profitRate = this.#calculateProfitRate(totalResult);
    this.#ui.printStatistics(totalResult, profitRate);
  }

  #calculateProfitRate(totalResult) {
    const winningAmount = totalResult.getWinningAmount();
    return ((winningAmount / this.#amount) * 100).toFixed(1);
  }
}

export default App;
