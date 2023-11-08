import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#sortNum(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }

    if(numbers.some(num => num < 1 || num > 45)) {
      throw new Error('[ERROR] 로또 번호는 1과 45 사이의 값이어야 합니다.');
    }

    numbers.forEach((num) => {
      if(!Number.isInteger(num)) throw new Error('[ERROR] 로또 번호는 정수여야 합니다.');
    });
    
  }

  #sortNum(numbers) {
    numbers.sort((a, b) => a - b);
  }

  printNum() {
    MissionUtils.Console.print(`[${this.#numbers.join(', ')}]`);
  }

  countMatchNumber(winning_number) {
    const winning_num_set = new Set(winning_number.#numbers);
    const count = this.#numbers.filter((num) => winning_num_set.has(num));

    return count.length;
  }

  hasBonusNumber(bonus_number) {
    let result = false;
    this.#numbers.forEach(num => {
      if(num === bonus_number) result = true;
    });

    return result;
  }
}

export default Lotto;
