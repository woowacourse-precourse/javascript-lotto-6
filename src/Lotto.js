import { Console } from "@woowacourse/mission-utils";
import LottoError from "./LottoError.js";
import { LOTTO_PICK } from "./constant.js";

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
    // 당첨번호 하나하나씩을 돌면서 이 로또에 번호가 있는지 확인
    winNumbers.forEach((number) => {
      if (this.#numbers.includes(number)){
        winStatus.main += 1;
      }
    })
    // 당첨번호와 5개가 일치한다면, 보너스번호 포함여부 확인
    if (winStatus.main === LOTTO_PICK.DRAW_UNITS - 1){
      winStatus.bonus = this.#numbers.includes(bonusNumber);
    }

    return winStatus;
  }
}

export default Lotto;
