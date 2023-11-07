import { ERROR_MESSAGE } from "./constants/errorMessage";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplication(numbers);
    this.#validate3(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.NO_WINNING_NUMBERS);
    }
  }

  // TODO: 추가 기능 구현
  #validateDuplication(numbers){
    if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.INPUT_DUPLICATION);
    }
  }

  #validate3(numbers){
    for(let i=0; i<6; i++){
      if(parseInt(numbers[i])>45 || parseInt(numbers[i])<1){
          throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
      }
      if(isNaN(numbers[i])){
        throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
      }
    }
  }
}

export default Lotto;
