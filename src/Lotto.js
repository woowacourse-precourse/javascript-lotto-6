import { ERROR } from "./const/error";

class Lotto {
  #numbers

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개입니다");
    };
    if([...new Set(numbers)].length !== numbers.length){
      throw new Error(ERROR.DUPLICATION);
    }
    numbers.forEach(element => {
      if(!Number.isInteger(element)) {throw new Error(ERROR.INTEGER);}
      if(element < 1 || element > 45) {throw new Error(ERROR.RANGE)}
    });
  }
}

export default Lotto;
