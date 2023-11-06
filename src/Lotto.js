import { Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  addBonusNumber(number){
    this.#bonusNumber = number;
  }

  checkResult(ticket){
    let count = 0
    for (let lottoNumber of ticket){
      if(this.#numbers.includes(lottoNumber)) count++;
      else if(lottoNumber == this.#bonusNumber) count+=0.5;
    }
    return count;
  }
}

export default Lotto;
