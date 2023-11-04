export default class Bonus {
  #bonus;

  static generateBonus(number, winningLotto) {
    return new Bonus(number, winningLotto);
  }

  constructor(number, winningLotto) {
    this.#validate(number, winningLotto);
    this.#bonus = number;
  }

  /* 
  🐛FIX: 조건 수정
  */
  #validate(number, winningLotto) {
    const isNumber = /^\d+$/;
    if (!isNumber.test(number)) {
      throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
    if (number < 1 || number > 45) {
      throw new Error('[ERROR] 1부터 45사이의 수를 입력해주세요.');
    }
    if (winningLotto.includes(number)) {
      throw new Error('[ERROR] 당첨번호와 중복됩니다. 다시 입력해주세요.');
    }
  }

  getBonus() {
    return this.#bonus;
  }
}
