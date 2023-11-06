import {
  checkInputTypeIsNumber,
  checkInputArrayLength6,
  checkInputArrayDuplication,
  checkInputArrayRange,
} from "./Validation";

class Winning {
  #winning;
  #bonus;
  constructor(winning, bonus) {
    this.#winning = winning;
    this.#validateWinning(winning);
    this.#bonus = bonus;
  }

  setBonus(bonus) {
    this.#bonus = bonus;
  }

  #validateWinning(winning) {
    //예외처리
    //1. 당첨번호는 숫자여야 한다.
    checkInputTypeIsNumber(winning.join(""));
    //2. 당첨번호는 6개여야 한다.
    checkInputArrayLength6(winning);
    //3. 당첨번호는 중복되지 않아야 한다.
    checkInputArrayDuplication(winning);
    //4. 각 당첨번호는 1~45사이의 숫자여야 합니다.
    checkInputArrayRange(winning);
  }
}

export default Winning;
