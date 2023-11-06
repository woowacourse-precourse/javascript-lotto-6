import NUMBER from '../utils/constants/number.js';
import LottoValidator from '../utils/validators/LottoValidator.js';
import LottoResultCalculator from './LottoResultCalculator.js';

class LottoService {
  #winningNumbers;

  #bonusNumber;

  #lottoTickets;

  #resultCalculator = new LottoResultCalculator();

  constructor(resultCalculator) {
    this.#resultCalculator = resultCalculator;
  }

  setWinningNumbers(numbers) {
    LottoValidator.validateLottoNumbers(numbers);
    this.#winningNumbers = numbers;
  }

  setBonusNumber(number) {
    LottoValidator.validateBonusNumber(number, this.#winningNumbers);
    this.#bonusNumber = number;
  }

  setLottoTickets(tickets) {
    this.#lottoTickets = tickets;
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  calculateResults() {
    const tickets = this.getLottoTickets();
    const winningNumbers = this.getWinningNumbers();
    const bonusNumber = this.getBonusNumber();
    return this.#resultCalculator.calculateResults(
      tickets,
      winningNumbers,
      bonusNumber,
    );
  }

  calculateProfitRate() {
    const totalSpentMoney =
      this.#lottoTickets.length * NUMBER.game.money.unitAmount;
    const profitRate =
      this.#resultCalculator.calculateProfitRate(totalSpentMoney);
    return profitRate;
  }
}

export default LottoService;
