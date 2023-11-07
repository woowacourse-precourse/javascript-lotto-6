import { ERROR } from "./const/error";
import { NUMBERS } from "./const/numbers";

class checkBonus {
  #numbers

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // if(isNaN(bonus)) {throw new Error(ERROR.NAN)};
    if([...new Set(numbers)].length !== numbers.length){
        throw new Error(ERROR.BONUS_DUPLICATION);
      }
    numbers.forEach(element => {
        if(!Number.isInteger(element)) {throw new Error(ERROR.INTEGER);}
        if(element < NUMBERS.MIN || element > NUMBERS.MAX) {throw new Error(ERROR.RANGE)}
    });
  }
}

export default checkBonus;
