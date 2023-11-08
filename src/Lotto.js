import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.sortNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if(!this.numberValidity(numbers)){
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if(!this.duplicateNumberCheck(numbers)) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  // TODO: 추가 기능 구현
  // 로또 번호 오름차순 정리
  sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  numberValidity(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  }

  // 중복
  duplicateNumberCheck(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers.size === numbers.length;
  }

  matchedNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number)).length;
  }

  matchedBonusNumber(bonusNumber){
    return this.#numbers.includes(bonusNumber);
  }

  getNumbers() {
    return this.#numbers;
  }

}

export default Lotto;
