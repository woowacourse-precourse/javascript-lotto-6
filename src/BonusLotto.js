export class BonusLotto {
  #number;
  #winningNumber;

  constructor(number, winningNumber) {
    this.#number = number;
    this.#winningNumber = winningNumber;
    this.#validate(number, winningNumber);
  }

  #validate(number, winningNumber) {
    this.#validateNumberRange(number);
    this.#validateNotIncludeWinning(number, winningNumber);
  }

  #validateNumberRange(number) {
    const REGEX = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;
    if (!REGEX.test(number)) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 하나의 숫자여야 합니다.');
    }
  }

  #validateNotIncludeWinning(number, winningNumber) {
    if (winningNumber.includes(number)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복된 숫자를 입력할 수 없습니다.');
    }
  }
}
