import { MissionUtils } from "@woowacourse/mission-utils";

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let number of numbers) {
      if (isNaN(number)) {
        throw new Error("[ERROR] 당첨 번호는 숫자로만 입력이 되어야합니다.");
      }
      if (new Set(numbers).size !== numbers.length) {
        throw new Error("[ERROR] 당첨 번호엔 중복이 없어야 합니다.");
      }
      if (number > 45 || number < 1) {
        throw new Error("[ERROR] 당첨 번호는 1에서 45의 범위여야 합니다.");
      }
    }
  }

  printNumbers() {
    let arr = this.#numbers.sort((a, b) => a - b);
    MissionUtils.Console.print(
      `[${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]}, ${arr[4]}, ${arr[5]}]`
    );
  }

  calcGuess(NUMBER_GUESS) {
    let CORRECT_GUESS = 0;
    for (let cnt = 0; cnt < 6; cnt++) {
      if (this.#numbers.includes(NUMBER_GUESS[cnt])) {
        CORRECT_GUESS++;
      }
    }
    return Number(CORRECT_GUESS);
  }

  isBonus(NUMBER_BONUS) {
    if (this.#numbers.includes(NUMBER_BONUS)) {
      return true;
    }
    return false;
  }

  // TODO: 추가 기능 구현
}
export default Lotto;
