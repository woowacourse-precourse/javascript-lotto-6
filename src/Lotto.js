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
    print(`[${this.#numbers.join(', ')}]`);
  }

  getPrizeCount(userNumbers, bonusNumber){
    let count = 0;
    let isbonus = false;
    userNumbers.forEach((userNumber)=>{
      if(this.#numbers.includes(userNumber)) count++;
    });


    if(count === 5 && this.#numbers.includes(bonusNumber)) isbonus = true;

    return {
      count,
      isbonus
    };
  }
}

export default Lotto;
