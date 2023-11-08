import { Console } from "@woowacourse/mission-utils";

const duplicateError = "[ERROR] 로또 번호는 중복되면 안됩니다.";
const numberError = "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.";
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#checkNumber(numbers);
    this.#checkSameNumber(numbers);
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    return;
  }
  #checkSameNumber(numbers) {
    if (new Set(numbers).size !== 6) throw Error(duplicateError);
    return;
  }
  #checkNumber(numbers) {
    numbers.map((number) => {
      if (number > 45 || number < 1) throw Error(numberError);
    });
    return;
  }
  getArray() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}
export default Lotto;
