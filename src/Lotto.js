import { WINNING_ERROR } from "./constants/ErrorMsg";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // 당첨 번호에 대한 유효성 검사
  #validate(numbers) {
    //1. 중복된 숫자가 있는 경우
    const numbersSet = new Set(numbers);
    if (numbers.length !== numbersSet.size) {
      throw new Error(WINNING_ERROR.SAME_NUM_ERROR);
    }

    //2. 로또 번호가 6개가 아닌 경우
    if (numbers.length !== 6) {
      throw new Error(WINNING_ERROR.LENGTH_ERROR);
    }
    
    for (let i = 0; i < numbers.length; i++) {
      const num = Number(numbers[i]);
      //3. 1부터 45까지의 숫자가 아닌 경우
      if (num < 1 || num > 45) {
        throw new Error(WINNING_ERROR.RANGE_ERROR);
      }

      //4. 숫자만 입력하지 않은 경우
      if ( Number.isNaN(num) ) {
        throw new Error(WINNING_ERROR.NUM_ERROR);
      }
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
