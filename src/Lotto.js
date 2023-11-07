import { MissionUtils } from "@woowacourse/mission-utils";

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

    const set = new Set(numbers)
    if(set.size !== numbers.length) {
      throw new Error ('[ERROR] 중복된 숫자가 있습니다.')
    }
  }

  printLottoNumber() {
    this.#numbers.sort((a,b) => a - b);
    const numbersStr = this.#numbers.join(', ')
    MissionUtils.Console.print(`[${numbersStr}]`)
  }

  getRank(winningNumbers, bonusNumber) {
    let count = 0;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(number)) count += 1;
    });

    if (count === 6) return 1;
    if (count === 5 && this.#numbers.includes(bonusNumber)) return 2;
    return 8 - count;
  }

}

export default Lotto;
