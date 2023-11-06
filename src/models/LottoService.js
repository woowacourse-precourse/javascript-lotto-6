import CustomError from '../errors/CustomError.js';
import LottoResultCalculator from './LottoResultCalculator.js';

class LottoService {
  static TICKET_PRICE = 1000;

  #winningNumbers;

  #bonusNumber;

  #lottoTickets;

  #resultCalculator = new LottoResultCalculator();

  setWinningNumbers(numbers) {
    this.validateWinningNumbers(numbers);
    this.#winningNumbers = numbers;
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new CustomError('길이오류');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new CustomError('중복있음');
    }
  }

  setBonusNumber(number) {
    this.validateBonusNumber(number);
    this.#bonusNumber = number;
  }

  validateBonusNumber(number) {
    if (this.#winningNumbers.includes(number)) {
      throw new CustomError('보너스번호가 당첨번호랑 중복임');
    }
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
      this.#lottoTickets.length * LottoService.TICKET_PRICE;
    const profitRate =
      this.#resultCalculator.calculateProfitRate(totalSpentMoney);
    return profitRate;
  }
}

export default LottoService;
