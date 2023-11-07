import { RANKING } from "./utils/Constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    if (new Set(numbers).size !== 6) throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
  }

  getNumbers() {
    return this.#numbers;
  }

  winningLotto(main, bonus) {
    const hasBonus = this.#numbers.includes(bonus);
    const matchMain = this.#numbers.filter((number) => main.includes(number)).length;
    if (matchMain === 5) return RANKING[matchMain](hasBonus);
    return RANKING[matchMain];
  }
}

export default Lotto;