import { ERROR_MESSAGE } from "./constants/errorMessage";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validate2(numbers);
    this.#validate3(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NO_WINNING_NUMBERS);
    }
  }

  // TODO: 추가 기능 구현
  #validate2(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.INPUT_DUPLICATION);
    }
  }

  #validate3(number) {
    for(let i=0; i<6; i++){
      if(parseInt(number[i])>45 || parseInt(number[i])<1){
          throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
      }
    }
  }
}

export default Lotto;
