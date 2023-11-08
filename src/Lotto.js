import { MissionUtils } from "@woowacourse/mission-utils";

export class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 당첨 번호엔 중복이 없어야 합니다.");
    }
    for (let num of numbers) {
      if (typeof num != "number")
        throw new Error("[ERROR] 당첨 값은 숫자로만 구성되어 있어야 합니다.");
      if (num > 45 || num < 1) {
        throw new Error("[ERROR] 당첨 번호는 1에서 45의 숫자여야 합니다.");
      }
    }
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!numbers || !Array.isArray(numbers) || numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  printAllLottoNum() {
    let arr = this.#numbers.sort((a, b) => a - b);
    let formatted_arr = `[${arr.join(", ")}]`;
    MissionUtils.Console.print(formatted_arr);
  }

  countWin(arr) {
    let win = 0;
    for (let i = 0; i < 6; i++) {
      if (this.#numbers.includes(arr[i])) {
        win++;
      }
    }
    return win;
  }

  getUserLotto(bonus) {
    if (this.#numbers.includes(bonus)) {
      return true;
    }
    return false;
  }
}

export default Lotto;
