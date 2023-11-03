export default class Bonus {
  #bonus;

  static generateBonus(number) {
    return new Bonus(number);
  }

  constructor(number) {
    this.#validate(number);
    this.#bonus = number;
  }

  #validate(number) {
    const isNumber = /^\d+$/;
    if (!isNumber.test(number)) {
      throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
    if (Number(number) <= 1 || Number(number) >= 45) {
      throw new Error('[ERROR] 1부터 45사이의 수를 입력해주세요.');
    }
  }
}
