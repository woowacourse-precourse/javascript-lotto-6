import { lottoSort, print } from "./common/utils.js";

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
  }

  // TODO: 추가 기능 구현

  printLottos = () => {
    lottoSort(this.#numbers);
    print(`[${this.#numbers.join(", ")}]`);
  };

  matchLotto = (winningNumber) => {
    const matchValue = this.#numbers.filter((v) => winningNumber.includes(v));
    return matchValue.length;
  };
  matchLottoBonus = (inputBonusNumber) => {
    return this.#numbers.includes(inputBonusNumber);
  };
}

export default Lotto;
