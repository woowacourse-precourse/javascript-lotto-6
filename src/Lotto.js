import { WINNING_ERROR } from "./constants/ErrorMsg";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
  }

  #validate(numbers) {
    //1. null일 경우
    if (numbers === null) {
      throw new Error(WINNING_ERROR.NULL_ERROR);
    }

    //2. 쉼표(,)로 구별하지 않은 경우
    if ( !numbers.includes(',') ) {
      throw new Error(WINNING_ERROR.COMMA_ERROR);
    }

    const numbersArray = numbers.split(',');

    //3. 중복된 숫자가 있는 경우
    const numbersSet = new Set(numbersArray);
    if (numbers.length !== numbersSet.size) {
      throw new Error(WINNING_ERROR.SAME_NUM_ERROR);
    }

    //4. 로또 번호가 6개가 아닌 경우
    if (numbersArray.length !== 6) {
      throw new Error(WINNING_ERROR.LENGTH_ERROR);
    }
    
    for (let i = 0; i < numbersArray.length; i++) {
      const num = Number(numbersArray[i]);
      //5. 1부터 45까지의 숫자가 아닌 경우
      if (num < 1 || num > 45) {
        throw new Error(WINNING_ERROR.RANGE_ERROR);
      }

      //6. 숫자만 입력하지 않은 경우
      const REGEX = /^\d+$/;
      if ( !REGEX.test(num) ) {
        throw new Error(WINNING_ERROR.NUM_ERROR);
      }
    }
    return numbersArray;
  }

}

export default Lotto;
