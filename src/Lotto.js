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
      if (!lottoNumbers.includes(number)) {
        lottoNumbers.push(number);
      }
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.")
    })
  }

  // TODO: 추가 기능 구현
  get myNumbers() {
    return this.#numbers;
  }

  sortLottoNumbers() {
    const sortedLottos = [];

    this.#numbers.forEach(lotto => {
      const lottoNumbers = lotto.myNumbers;
      sortedLottos.push(lottoNumbers.sort((a, b) => a - b));
    });

    return sortedLottos;
  }
}

export default Lotto;
