import LottoGenerator from "./LottoGenerator.js";
import LottoValidator from "./utils/LottoValidator.js";
import LottoDisplay from "./LottoDisplay.js";
import LottoResult from "./LottoResult.js";
import { DECIMAL, INPUT_SEPARATOR } from "./utils/lottoConstants.js";

const display = new LottoDisplay();
const generator = new LottoGenerator();
const validator = new LottoValidator();
const result = new LottoResult();

class App {
  async getValidInput(requestFunction, validationFunction, ...validationArgs) {
    while (true) {
      try {
        const rawInput = await requestFunction();
        const validInput = validationFunction(rawInput, ...validationArgs);
        return validInput;
      } catch (error) {
        display.displayError(error.message);
      }
    }
  }

  validateMoneyInput(rawMoney) {
    const money = parseInt(rawMoney, DECIMAL);
    validator.validateMoney(money);
    return money;
  }

  validateWinningNumbersInput(rawWinningNumbers) {
    const winningNumbers = rawWinningNumbers
      .split(INPUT_SEPARATOR)
      .map((number) => parseInt(number.trim(), DECIMAL));
    validator.validateWinningNumbers(winningNumbers);
    return winningNumbers;
  }

  validateBonusNumberInput(rawBonusNumber, winningNumbers) {
    const bonusNumber = parseInt(rawBonusNumber, DECIMAL);
    validator.validateBonusNumbers(bonusNumber, winningNumbers);
    return bonusNumber;
  }

  async getMoneyAndTickets() {
    const money = await this.getValidInput(
      display.requestMoneyInput.bind(display),
      this.validateMoneyInput.bind(this)
    );
    const lottoTickets = generator.getLottoTickets(money);

    display.displayNumberOfTickets(lottoTickets.length);
    display.displayLottoTickets(lottoTickets);

    return { money, lottoTickets };
  }

  async getWinningData() {
    const winningNumbers = await this.getValidInput(
      display.requestWinningNumbersInput.bind(display),
      this.validateWinningNumbersInput.bind(this)
    );
    const bonusNumber = await this.getValidInput(
      display.requestBonusNumberInput.bind(display),
      this.validateBonusNumberInput.bind(this),
      winningNumbers
    );

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
