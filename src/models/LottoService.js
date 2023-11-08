import NUMBER from '../utils/constants/number';
import LottoValidator from '../utils/validators/LottoValidator';

class LottoService {
  #winningNumbers;

  #bonusNumber;

  #lottoTickets;

  #resultCalculator;

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

  calculateResults() {
    return this.#resultCalculator.calculateResults(
      this.#lottoTickets,
      this.#winningNumbers,
      this.#bonusNumber,
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
