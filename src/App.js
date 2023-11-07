import InputHandler from "./lib/Handler/InputHandler.js";
import OutputHandler from "./lib/Handler/OutputHandler.js";
import { NonPropagatingError } from "./lib/Error/index.js";

class App {
  #lottoBundle;
  #referenceLotto;

  async play() {
    try {
      this.#lottoBundle = await InputHandler.lottoBundle();
      this.printLottoBundle();

      this.#referenceLotto = await InputHandler.referenceLotto();
      await InputHandler.injectBonus(this.#referenceLotto);
      this.printResult();
    } catch (err) {
      const nonPropagatingError = new NonPropagatingError(err.message);
      OutputHandler.error(nonPropagatingError);
    }
  }

  async printLottoBundle() {
    try {
      OutputHandler.lottoBundle(this.#lottoBundle);
    } catch (err) {
      OutputHandler.error(err);
    }
  }

  async printResult() {
    try {
      OutputHandler.result(this.#lottoBundle, this.#referenceLotto);
    } catch (err) {
      OutputHandler.error(err);
    }
  }
}

export default App;
