import { WINNING_ERROR } from "./constants/ErrorMsg";

class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#numbers = this.#validate(numbers);
    this.#bonusNumber = this.#validateBounus(bonusNumber)
  }

  // 당첨 번호에 대한 유효성 검사
  #validate(numbers) {
    //1. null일 경우
    if (numbers === null) {
      throw new Error(WINNING_ERROR.NULL_ERROR);
    }

    const numbersArray = numbers.split(',');

    //2. 중복된 숫자가 있는 경우
    const numbersSet = new Set(numbersArray);
    if (numbers.length !== numbersSet.size) {
      throw new Error(WINNING_ERROR.SAME_NUM_ERROR);
    }

    //3. 로또 번호가 6개가 아닌 경우
    if (numbersArray.length !== 6) {
      throw new Error(WINNING_ERROR.LENGTH_ERROR);
    }
    
    for (let i = 0; i < numbersArray.length; i++) {
      const num = Number(numbersArray[i]);
      //4. 1부터 45까지의 숫자가 아닌 경우
      if (num < 1 || num > 45) {
        throw new Error(WINNING_ERROR.RANGE_ERROR);
      }

      //5. 숫자만 입력하지 않은 경우
      const REGEX = /^\d+$/;
      if ( !REGEX.test(num) ) {
        throw new Error(WINNING_ERROR.NUM_ERROR);
      }
    }
    return numbersArray;
  }

  //보너스 번호에 대한 유효성 검사
  #validateBounus(bonusNumber) {
    //1. null일 경우
    if (bonusNumber === null) {
      throw new Error(WINNING_ERROR.NULL_ERROR);
    }
    //2. 숫자를 입력하지 않은 경우
    const REGEX = /^\d+$/;
    if ( !REGEX.test(bonusNumber) ) {
      throw new Error(WINNING_ERROR.NUM_ERROR);
    }
    //3. 1부터 45사이의 숫자를 입력하지 않은 경우
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(WINNING_ERROR.RANGE_ERROR);
    }

    return bonusNumber;
  }

  getNumbers() {
    return this.#numbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
  
}

export default Lotto;
