import { Random, Console } from '@woowacourse/mission-utils';
import { stat } from 'fs';

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
  }

  // TODO: 추가 기능 구현
  generateRandomNumber(){
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  sortNumbers(inputList){
    const sortedList = inputList.sort(function(a,b){
      return a - b;
    });
    return sortedList;
  }

  
}

export default Lotto;
