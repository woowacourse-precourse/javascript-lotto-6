import { Console } from "@woowacourse/mission-utils";
import InputError from "./InputError.js";
import { MIN_NUM, MAX_NUM, LOTTO_LENGTH } from "./constant/const.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      throw new InputError("로또 번호는 6개여야 합니다.");
    }
    numbers.forEach((number) => this.#checkRange(number));
    if (new Set(numbers).size !== LOTTO_LENGTH)
      throw new InputError("중복된 수가 존재하면 안됩니다.");
  }

  // TODO: 추가 기능 구현
  #checkRange(number) {
    if (number < MIN_NUM || number > MAX_NUM)
      throw new InputError("로또 번호는 1에서 45 사이의 수 입니다.");
  }

  get numbers() {
    return [...this.#numbers];
  }

  printNumbers() {
    Console.print(
      `[${this.#numbers[0]}, ${this.#numbers[1]}, ${this.#numbers[2]}, ${
        this.#numbers[3]
      }, ${this.#numbers[4]}, ${this.#numbers[5]}]`
    );
  }
}

export default Lotto;
