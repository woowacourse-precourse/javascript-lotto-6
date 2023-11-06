class WinningNumber {
  #winningNumber;

  constructor(winningNumber) {
    const numbers = this.#splitWinningNumber(winningNumber);
    this.#validate(numbers);
    this.#winningNumber = numbers;
  }

  #splitWinningNumber(winningNumber) {
    return winningNumber.split(',');
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }

    if ([...new Set(numbers)].length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');
    }

    numbers.forEach((number) => {
      if (!Number.isInteger(Number(number))) {
        throw new Error('[ERROR] 당첨 번호는 정수 이여야 합니다.');
      }

      if (number.length !== Number(number).toString().length) {
        throw new Error('[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.');
      }

      if (Number(number) > 45 || Number(number) < 1) {
        throw new Error('[ERROR] 당첨 번호는 1~45 사이의 수 이여야 합니다.');
      }
    });
  }

  getWinningNumber() {
    return this.#winningNumber.map(Number);
  }
}

export default WinningNumber;
