class BonusLotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 보너스 로또 번호는 1개여야 합니다.");
    }
    if (Number.isNaN(Number(numbers))) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    return true;
  }
}

export default BonusLotto;
