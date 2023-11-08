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
        throw new Error("[ERROR] 당첨 번호는 1에서 45의 범위여야 합니다.");
      }
    }
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!numbers || !Array.isArray(numbers) || numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  //메소드 : 로또 번호를 오름차순으로 정렬하고, 올바른 형식으로 포맷한다
  printAllLottoNum() {
    let arr = this.#numbers.sort((a, b) => a - b);
    let formatted_arr = `[${arr.join(", ")}]`;
    MissionUtils.Console.print(formatted_arr);
  }

  //메소드 : 로또 당첨 번호와 몇개가 일치하는 지 센다
  countWin(arr) {
    let win = 0;
    for (let i = 0; i < 6; i++) {
      if (this.#numbers.includes(arr[i])) {
        win++;
      }
    }
    return win;
  }

  //메소드 : 보너스 번호가 로또 당첨 번호에 해당되는지 그 여부를 확인한다
  isBonus(bonus) {
    if (this.#numbers.includes(bonus)) {
      return true;
    }
    return false;
  }
}

export default Lotto;
