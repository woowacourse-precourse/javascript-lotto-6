import { ERROR } from "./const/error";

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
  }
}

export default checkBonus;
