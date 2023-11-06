class LottoService {
  #winningNumbers;

  #bonusNumber;

  setWinningNumbers(numbers) {
    this.validateWinningNumbers(numbers);
    this.#winningNumbers = numbers;
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error('길이오류');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('중복있음');
    }
  }

  setBonusNumber(number) {
    this.validateBonusNumber(number);
    this.#bonusNumber = number;
  }

  validateBonusNumber(number) {
    if (this.#winningNumbers.includes(number)) {
      throw new Error('보너스번호가 당첨번호랑 중복임');
    }
  }

  getWinningNumbers() {
    return this.#winningNumbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default LottoService;
