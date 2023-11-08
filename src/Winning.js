import { model } from "./Model.js";
import { errorComments } from "./Comment.js";

export class Winning {
  #numbers

  constructor(numbers) {
    this.#validate(numbers);
    this.#winnningNumberValidater(numbers);
    this.#winnningNumberDuplicateValidater(numbers);
    this.#winnningNumberRangeValidater(numbers);
    this.#numbers = numbers;

    this.#convertToNumberArray(numbers);
  };

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(errorComments.winning[0]);
    }
  }

  #winnningNumberValidater(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      this.#winnningEachNumberValidater(numbers[i]);
    }
  }

  #winnningEachNumberValidater(number) {
    if (/^[+]?[1-9]\d*$/.test(number)) {
      return Number(number);
    } 
    throw new Error(errorComments.winning[1]);
  }

  #winnningNumberDuplicateValidater(numbers) {
    for (let i = 0; i < numbers.length-1; i++) {
      if (numbers[i] === numbers[i+1]) {
        throw new Error(errorComments.winning[2])
      }
    }
  }

  #winnningNumberRangeValidater(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      this.#winnningEachNumberRangeValidater(numbers[i]);
    }
  }

  #winnningEachNumberRangeValidater(number) {
    if (number > 45) {
      throw new Error(errorComments.winning[3])
    }
  }

  #convertToNumberArray(stringArray) {
    const numberArray = stringArray.map((str) => parseInt(str, 10));
    
    model.winningNumber = [];
    model.winningNumber = numberArray;
  }
}