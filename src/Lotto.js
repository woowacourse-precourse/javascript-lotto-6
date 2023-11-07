import { Console,Random } from "@woowacourse/mission-utils";


class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const num = (Object.values(numbers)).length;
    if(num!=6){
      throw new Error('[ERROR] 6자리 숫자여야 합니다.');
    }
    
    const str = String(Object.values(numbers));
    const inputToSet = new Set(str.split(',').map(Number));
    if ([...inputToSet].length !== 6) {
      throw new Error('[ERROR] 숫자는 중복이 없어야 합니다.');
    }
  }
  
 
  // TODO: 추가 기능 구현
  sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  printNumbers() {
    this.sortNumbers();

    Console.print(`[${this.#numbers.join(', ')}]`);
  } 

  getBonusRank(bonusNumber){
    this.#numbers.forEach((number) => {
      if (bonusNumber.includes(number)) {
        return true;
      }
    });
  }

  getRank(winningNumbers, bonusNumber) {
    let count = 0;
    this.#numbers.forEach((number) => {
      if (winningNumbers.includes(String(number))) {
        count+=1;      
      }
    });

    if (count===5){
      if(this.getBonusRank(String(bonusNumber)));{
        count+=1;
      }
    }
    return count;
  }
}

export default Lotto;
