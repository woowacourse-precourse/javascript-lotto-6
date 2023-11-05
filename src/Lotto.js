class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#inRange(numbers);
    this.#noSameNumber(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  #inRange(numbers) {
    numbers.map((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });
  }
  #noSameNumber(numbers) {
    const noSameNum = new Set(numbers);
    if (noSameNum.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
