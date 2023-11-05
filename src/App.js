import LottoGenerator from "./LottoGenerator.js";
import LottoValidator from "./utils/LottoValidator.js";
import LottoDisplay from "./LottoDisplay.js";

const display = new LottoDisplay();
const generator = new LottoGenerator();
const validator = new LottoValidator();

class App {
  async getValidMoneyInput() {
    while (true) {
      try {
        const money = await display.requestMoneyInput();
        validator.validateMoney(money);
        return money;
      } catch (error) {
        display.displayError(error.message);
      }
    }
  }

  async getValidWinningNumbers() {
    while (true) {
      try {
        const rawWinningNumbers = await display.requestWinningNumbersInput();
        const winningNumbers = rawWinningNumbers
          .split(",")
          .map((number) => parseInt(number.trim(), 10));
        validator.validateWinningNumbers(winningNumbers);
        return winningNumbers;
      } catch (error) {
        display.displayError(error.message);
      }
    }
  }

  async getValidBonusNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumberInput = await display.requestBonusNumberInput();
        const bonusNumber = parseInt(bonusNumberInput, 10);
        validator.validateBonusNumbers(bonusNumber, winningNumbers);
        return bonusNumber;
      } catch (error) {
        display.displayError(error.message);
      }
    }
  }

  async play() {
    const money = await this.getValidMoneyInput();
    const lottoTickets = await generator.getLottoTickets(money);

    display.displayNumberOfTickets(lottoTickets.length);
    display.displayLottoTickets(lottoTickets);

    const winningNumbers = await this.getValidWinningNumbers();
    await this.getValidBonusNumber(winningNumbers);
  }
}

export default App;
