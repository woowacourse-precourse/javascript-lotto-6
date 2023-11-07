import { isDuplicate, isNumberInRange, isSixLength } from "./utils/vaildator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    isDuplicate(numbers) || isNumberInRange(numbers) || isSixLength(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  comapareNumbers(winningNums, bonusNum) {
    const winningCnt = this.#numbers.filter((num) => winningNums.includes(num)).length;
    let bonusHit = false;
    
    // 당첨 번호 5개를 맞췄을 때만 보너스 번호 확인
    if(winningCnt === 5) bonusHit = this.#numbers.includes(bonusNum);
    return { winningCnt, bonusHit };
  }
}

export default Lotto;
