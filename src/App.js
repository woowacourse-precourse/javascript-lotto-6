import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import LottoGenerator from "./LottoGenerator.js";
import LottoNumberGenerator from "./LottoNumberGenerator.js";

class App {
  #lottoGenerator = new LottoGenerator();

  async play() {
    const tickets = await this.purchaseLotto();
    const winningNumbers = await this.pickWinningNumbers();
    const bonusNumber = await this.pickBonusNumber();
  }

  async purchaseLotto() {
    try {
      const price = await InputView.readPurchasePrice();
      return this.#lottoGenerator.purchase(price);
    } catch (error) {
      OutputView.printError(error.message);
      return this.purchaseLotto();
    }
  }

  async pickWinningNumbers() {
    try {
      const winningNumbers = this.#parseWinningNumbers(
        await InputView.readWinningNumbers()
      );
      this.#validateWinningNumbers(winningNumbers);
      return winningNumbers;
    } catch (error) {
      OutputView.printError(error.message);
      return this.pickWinningNumbers();
    }
  }

  #parseWinningNumbers(winningNumbers) {
    return winningNumbers.split(",").map(Number);
  }

  #validateWinningNumbers(winningNumbers) {
    if (!LottoNumberGenerator.isValidNumberQuantity([... new Set(winningNumbers)])) {
      throw new Error("[ERROR] 중복되지 않은 6개의 숫자로 구성되어야 합니다.");
    }
    for (let number of winningNumbers) {
      this.#validateNumber(number);
    }
  }

  #validateNumber(bonusNumber) {
    if (!LottoNumberGenerator.isValidLottoNumber(bonusNumber)) {
      throw new Error("[ERROR] 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  async pickBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumber();
      this.#validateNumber(bonusNumber);
      return bonusNumber;
    } catch (error) {
      OutputView.printError(error.message);
      return this.pickBonusNumbers();
    }
  }
}

export default App;
