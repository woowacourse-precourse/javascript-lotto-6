import { Console } from "@woowacourse/mission-utils";

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
    
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되어서는 안됩니다.");
    }

    numbers.forEach(number => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 로또 번호가 올바른 숫자 형식이 아닙니다.")
      }
    })
  }

  printNumbers() {
    Console.print("[" + this.#numbers.join(", ") + "]");
  }

  #ranking(winningCount, doesBonusMatch) {
    if (winningCount == 3) { return 5; }
    else if (winningCount == 4) { return 4; }
    else if (winningCount == 5 && !doesBonusMatch) { return 3; }
    else if (winningCount == 5 && doesBonusMatch) { return 2; }
    else if (winningCount == 6) { return 1;}
    else { return 0; }
  }

  confirmWinning(winningNumbers,winningBonusNumber) {
    let winningCount = 0;
    let doesBonusMatch = false;

    this.#numbers.forEach(number => {
      if (winningNumbers.includes(number)) {
        winningCount += 1;
      }

      if (number == winningBonusNumber) {
        doesBonusMatch = true;
      }
    })

    return this.#ranking(winningCount, doesBonusMatch);
  }
}

export default Lotto;
