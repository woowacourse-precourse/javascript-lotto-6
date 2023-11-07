class Bonus {
  #number;

  constructor(number, numbers) {
    this.#validateIsString(number);
    this.#validateIsLottoNumber(number);
    this.#validateDuplicateNumber(number, numbers);
    this.#number = number;
  }

  #validateIsString(number) {
    if (/[^0-9]/.test(number)) {
      throw new Error('[ERROR] 보너스 번호는 숫자만 입력 가능합니다.');
    }
  }

  #validateIsLottoNumber(number) {
    if (Number(number) < 1 || Number(number) > 45) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  #validateDuplicateNumber(number, numbers) {
    if (numbers.includes(number)) {
      throw new Error(
        '[ERROR] 보너스 번호는 로또 번호와 중복되지 않아야 합니다.'
      );
    }
  }

  winningNumber() {
    return this.#number;
  }
}

export default Bonus;
