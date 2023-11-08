class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.some((number) => !Number.isInteger(number))) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
    }
  }

  join(seperator) {
    return this.#numbers.join(seperator);
  }

  includes(number) {
    return this.#numbers.includes(number);
  }

  compare(winningLotto) {
    const lottoMatch = this.#numbers.filter(
      (lottoNumber) => winningLotto.includes(lottoNumber),
    ).length;
    return lottoMatch;
  }
}

export default Lotto;
