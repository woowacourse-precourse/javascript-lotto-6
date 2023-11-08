class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }


  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const lottoNumbers = [];
    numbers.forEach(number => {
      if (number <1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }

      if (lottoNumbers.includes(number)) {
        throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
      }

      lottoNumbers.push(number);
    });
  }

  // TODO: 추가 기능 구현
  get myNumbers() {
    return this.#numbers;
  }

  sortLottoNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
