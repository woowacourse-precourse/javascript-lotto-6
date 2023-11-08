class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.some((number) => typeof number !== 'number')) {
      throw new Error('[ERROR] 로또 번호는 숫자를 입력해주셔야합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  // TODO: 추가 기능 구현
  #getNumbers() {
    return this.#numbers;
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  duplicateTest(bonus) {
    return this.#numbers.includes(bonus);
  }

  compareLotto(lotto, bonus) {
    if (!(lotto instanceof Lotto)) {
      throw new Error('[ERROR] Lotto 객체를 입력해주세요.');
    }

    let matchCount = 0;
    let matchBonus = false;
    const lottoNumbers = lotto.#getNumbers();
    this.#numbers.forEach((number) => {
      if (lottoNumbers.includes(number)) {
        matchCount += 1;
      }
      if (number === bonus) {
        matchBonus = true;
      }
    });

    return [matchCount, matchBonus];
  }
}

export default Lotto;
