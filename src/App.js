import LottoGenerator from "./LottoGenerator.js";
import LottoValidator from "./utils/LottoValidator.js";
import LottoDisplay from "./LottoDisplay.js";
import LottoResult from "./LottoResult.js";

const display = new LottoDisplay();
const generator = new LottoGenerator();
const validator = new LottoValidator();
const result = new LottoResult();

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

  async getMoneyAndTickets() {
    const money = await this.getValidMoneyInput();
    const lottoTickets = await generator.getLottoTickets(money);

    display.displayNumberOfTickets(lottoTickets.length);
    display.displayLottoTickets(lottoTickets);

    return { money, lottoTickets };
  }

  async getWinningData() {
    const winningNumbers = await this.getValidWinningNumbers();
    const bonusNumber = await this.getValidBonusNumber(winningNumbers);

    return { winningNumbers, bonusNumber };
  }

  async getGameData() {
    const { money, lottoTickets } = await this.getMoneyAndTickets();
    const { winningNumbers, bonusNumber } = await this.getWinningData();

    return {
      money,
      lottoTickets,
      winningNumbers,
      bonusNumber,
    };
  }

  async play() {
    const gameData = await this.getGameData();

    const { winningCounts, rateOfReturn } = result.calculateFinalResult(
      gameData.lottoTickets,
      gameData.winningNumbers,
      gameData.bonusNumber
    );
    display.displayResults(winningCounts, rateOfReturn);
  }
}

export default App;
