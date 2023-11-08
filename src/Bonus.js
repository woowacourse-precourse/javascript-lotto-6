import { model } from "./Model.js";

export class Bonus {
  #number;

  constructor(number, winningNumbers) {
    this.#bonusNumberValidater(number);
    this.#bonusNumberRangeValidater(number);
    this.#bonusNumberDuplicateValidater(number, winningNumbers);
    this.#number = number;

    model.bonus = this.#number;
  }

  #bonusNumberValidater(number) {
    if (/^[+]?[1-9]\d*$/.test(number)) {
      return true;
    } 
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }

  #bonusNumberRangeValidater(number) {
    if (number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
    }
  }

  #bonusNumberDuplicateValidater(bonus, winning) {
    for (let i = 0; i < winning.length; i++) {
      if (winning[i] === bonus) {
        throw new Error("[ERROR] 보너스 번호가 중복되었습니다.")
      }
    }
  }
}