class Bonus {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {
    if (number > 45 || number < 1 || isNaN(number)) {
      throw new Error("[ERROR] 로또 번호는 1 이상 45 이하의 숫자여야 합니다.");
    }
  }
  getBonusNumber() {
    return this.#number;
  }
}

export default Bonus;
