class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    [...numbers].map((v, idx) => {
      if (isNaN(parseInt(v))) throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
      if (1 > v || v > 45) throw new Error("[ERROR] 로또 번호는 1~45 사이여야 합니다.");
      if (numbers.indexOf(v) !== idx) throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다");
    })
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
