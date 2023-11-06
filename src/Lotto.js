import Utils from "./Utils.js";

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

    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호에 중복이 있으면 안됩니다.");
    }
  }

  // TODO: 추가 기능 구현
  get getLottoNumbers() {
    return this.#numbers;
  }

  checkLotto(winnings, bonus) {
    return Utils.rankLotto(
      winnings.filter((winning) => this.#numbers.includes(winning)).length,
      this.#numbers.includes(bonus) ? 1 : 0
    );
  }
}

export default Lotto;
