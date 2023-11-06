import Handler from "./lib/Handler/index.js";
import OutputView from "./lib/View/OutputView.js";
import { ERROR_MESSAGE } from "./lib/Constants.js";

class App {
  #tickets;

  async play() {
    try {
      this.#tickets = await Handler.tickets();
      this.printTickets();
      const lotto = await Handler.lotto();
      const bonusNumber = await Handler.bonusNumber(lotto);

      const result = lotto.calcResult(this.#tickets.items, bonusNumber);
      this.#tickets.result = result;
      this.printResult();
    } catch (err) {
      OutputView.err({ message: err.message });
    }
  }

  printTickets() {
    try {
      if (!this.#tickets || !this.#tickets.items) {
        throw new Error(ERROR_MESSAGE.INSTANCE_NOT_INITIALIZED);
      }
      OutputView.tickets({ ticketItems: this.#tickets.items });
    } catch (err) {
      OutputView.err({ message: err.message });
    }
  }

  printResult() {
    try {
      if (!this.#tickets || !this.#tickets.result) {
        throw new Error(ERROR_MESSAGE.INSTANCE_NOT_INITIALIZED);
      }
      const { prizeMap, winRate } = this.#tickets.result;
      OutputView.result({ prizeMap, winRate });
    } catch (err) {
      OutputView.err({ message: err.message });
    }
  }
}

export default App;
