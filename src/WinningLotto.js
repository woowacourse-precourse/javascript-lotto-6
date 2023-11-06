class WinningLotto {
  #winningLotto;

  constructor(input) {
    const numbers = input.split(',').map(Number);
    this.checkValid(numbers);
    this.#winningLotto = numbers;
  }

  checkValid(numbers) {
    if (numbers.some((num) => isNaN(num))) {
      throw new Error('[ERROR] 유효하지 않은 숫자가 있습니다.');
    }
    if (numbers.some((num) => num < 0 || num > 45)) {
      throw new Error('[ERROR] 숫자는 1부터 45중 하나여야 합니다.');
    }
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨번호는 6자리여야 합니다.');
    }
  }

  getWinningNums() {
    return this.#winningLotto;
  }
}

export default WinningLotto;
