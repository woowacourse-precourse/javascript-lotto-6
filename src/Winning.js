import { model } from "./Model.js";

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
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
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
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  #winnningNumberDuplicateValidater(numbers) {
    for (let i = 0; i < numbers.length-1; i++) {
      if (numbers[i] === numbers[i+1]) {
        throw new Error("[ERROR] 로또 번호가 중복되었습니다.")
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
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
    }
  }

  #convertToNumberArray(stringArray) {
    const numberArray = stringArray.map((str) => parseInt(str, 10));
    
    model.winningNumber = [];
    model.winningNumber = numberArray;
  }
}