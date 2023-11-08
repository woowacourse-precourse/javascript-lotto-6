import { model } from "./Model.js";
import { errorComments } from "./Comment.js";

export class Bonus {
  #number;

  constructor(number, winningNumbers) {
    const validateNumber = this.#bonusNumberValidater(number);
    this.#bonusNumberRangeValidater(validateNumber);
    this.#bonusNumberDuplicateValidater(validateNumber, winningNumbers);
    
    this.#number = number;
    model.bonus = validateNumber;
  }

  #bonusNumberValidater(number) {
    if (/^[+]?[1-9]\d*$/.test(number)) {
      return Number(number);
    } 
    throw new Error(errorComments.bonus[0]);
  }

  #bonusNumberRangeValidater(number) {
    if (number > 45) {
      throw new Error(errorComments.bonus[1])
    }
  }

  #bonusNumberDuplicateValidater(bonus, winning) {
    for (let i = 0; i < winning.length; i++) {
      if (winning[i] === bonus) {
        throw new Error(errorComments.bonus[2])
      }
    }
  }
}