class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.checkDuplicate(numbers);
    numbers.forEach((e) => {
      this.checkNumber(e);
    });
    this.#numbers = numbers;
    this.number = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  checkDuplicate(numbers) {
    const set = new Set(numbers);
    if (6 !== set.size) {
      throw new Error("[ERROR] 로또 번호에 중복이 있습니다.");
    }
  }

  checkNumber(number) {
    if (isNaN(number)) {
      throw new Error("[ERROR] 숫자 형식이 아닙니다.");
    }
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 숫자는 1부터 45까지 입력해야 합니다.");
    }
  }
}

export default Lotto;
