import { Console } from "@woowacourse/mission-utils";
import LottoError from "./LottoError.js";
import { ERROR_MESSAGE, LOTTO_PICK } from "./constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#sortAscending(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new LottoError("로또 번호는 6개여야 합니다.");
    }
    this.#validateOverlap(numbers);
  }

  #validateOverlap(numbers){
    const numbersDuplicate = new Set(numbers);
    if (numbersDuplicate.size !== numbers.length){
      throw new LottoError(ERROR_MESSAGE.OVERLAPPED_VALUE); 
    }
  }

  printConsole(){
    Console.print(this.#numbers);
  }

  #sortAscending(numbers){
    numbers.sort((prev, next) => prev - next);
  }

  checkWin(winNumbers, bonusNumber){
    let winStatus = {
      main : 0,
      bonus: false,
    };

    winNumbers.forEach((number) => {
      if (this.#numbers.includes(number)){
        winStatus.main += 1;
      }
    })
  
    if (winStatus.main === LOTTO_PICK.DRAW_UNITS - 1){
      winStatus.bonus = this.#numbers.includes(bonusNumber);
    }

    return winStatus;
  }


}

export default Lotto;
