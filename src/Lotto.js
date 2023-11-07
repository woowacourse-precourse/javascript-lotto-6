class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#sortLotto(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (numbers.some((el) => isNaN(el))) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }

    if (numbers.length > new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복이 아닌 6개여야 합니다.");
    }

    if (numbers.some((el) => el > 45 || el < 1)) {
      throw new Error("[ERROR] 로또 번호는 1~45범위여야 합니다.");
    }
  }
  // TODO: 추가 기능 구현
  #sortLotto(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
