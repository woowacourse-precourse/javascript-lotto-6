import { print } from "./util/output.js";
import { getValidatedNumbers } from "./validation/number.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.printLottos(numbers);
  }

  #validate(numbers) {
    this.#numbers = getValidatedNumbers(numbers);
  }

  // TODO: 추가 기능 구현
  printLottos(){
    print(this.#numbers);
  }

  getPrizeCount(userNumbers){
    let count = 0;
    userNumbers.forEach((userNumber)=>{
      if(this.#numbers.includes(userNumber)) count++;
    });

    return count;
  }
}

export default Lotto;
