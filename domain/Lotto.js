import { ERROR } from "../src/const/error";
import { NUMBERS } from "../src/const/numbers";

class Lotto {
  #numbers

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBERS.LENGTH) {
      throw new Error("[ERROR] 로또 번호는 6개입니다");
    };
    if([...new Set(numbers)].length !== numbers.length){
      throw new Error(ERROR.DUPLICATION);
    }
    numbers.forEach(element => {
      if(!Number.isInteger(element)) {throw new Error(ERROR.INTEGER);}
      if(element < NUMBERS.MIN || element > NUMBERS.MAX) {throw new Error(ERROR.RANGE)}
    });
    return numbers;
  }
}

export default Lotto;
