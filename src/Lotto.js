import { Console } from "@woowacourse/mission-utils";
import { Validation } from "./Validation.js";
import { LOTTO_RULE, GAME_MESSAGES } from "./Constants.js";

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

    if(!Validation.isUnique(numbers)){
      throw new Error("[ERROR] 로또 번호는 유일해야 합니다.")
    }

    numbers.every((number)=>{
      if(!Validation.isNumber(number)){
        throw new Errow("[ERROR] 로또 번호는 숫자여야 합니다.")
      }

      if(!Validation.isPositive(number)){
        throw new Errow("[ERROR] 로또 번호는 양수여야 합니다.")
      }

      if(!Validation.isOnRange(number)){
        throw new Errow("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.")
      }

      if(!Validation.isInteger(number)){
        throw new Errow("[ERROR] 로또 번호는 정수여야 합니다.")
      }
    })
  }

  getNumbers() {
    return this.#numbers;
  }

  printNumbers() {
    return Console.print(this.#numbers.join(","));
  }
}

export default Lotto;
