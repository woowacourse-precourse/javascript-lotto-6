class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateOfNonNumber(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
    if (numbers.every(x => x >= 1 && x <= 45) === false) {
      throw new Error('[ERROR] 로또 번호는 1~45 범위 내에 포함되어야 합니다.');
    }
  }

  #validateOfNonNumber(numbers) {
    const SPECIAL_PATTERN = /[\{\}\\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
    if (SPECIAL_PATTERN.test(numbers.join(',')) === true) {
      throw new Error('[ERROR] 쉼표 외 문자는 포함될 수 없습니다.');
    }
  }

  compareWithRandomLotto(lotto) {
    const WINNING_NUMBER_SPLIT = this.#numbers.map(Number);
    const resultArray = lotto.map(
      numbers => numbers.filter(x => WINNING_NUMBER_SPLIT.includes(x)).length,
    );

    return resultArray;
  }

  getCompareResult(lotto) {
    return this.compareWithRandomLotto(lotto);
  }
}

export default Lotto;
