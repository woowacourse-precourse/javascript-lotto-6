import LottoValidator from './domain/LottoValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const lottoValidator = new LottoValidator();
    lottoValidator.validateLottoNumber(numbers);
  }

  /**
   * 검증된 로또 번호 배열을 오름차순으로 정렬하여 반환한다.
   * @returns {number[]} - 오름차순으로 정렬된 로또 번호 배열
   */
  getSortedNumbers() {
    return [...this.#numbers].sort((firstNumber, secondNumber) => firstNumber - secondNumber);
  }

  /**
   * 로또 번호 배열에 보너스 번호가 포함되어 있는지 확인한다.
   * @param {number} bonusNumber
   * @returns {boolean} - 보너스 번호 포함 여부
   */
  hasContainBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  /**
   * 주어진 당첨 번호와 일치하는 숫자의 수를 세어 반환한다.
   * @param {number[]} winningNumbers - 당첨 번호로 구성된 배열
   * @returns {number} - 일치하는 숫자의 수
   */
  countMatchWinningNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length;
  }

  /**
   * 로또의 당첨 결과와 보너스번호의 포함여부를 객체로 반환한다.
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   * @returns {{ matchingCount: number, hasBonusNumber: boolean }} - 당첨 결과
   */
  getLottoComparisonResults(winningNumbers, bonusNumber) {
    const matchingCount = this.countMatchWinningNumbers(winningNumbers);
    const hasBonusNumber = this.hasContainBonusNumber(bonusNumber);

    return { matchingCount, hasBonusNumber };
  }
}

export default Lotto;
