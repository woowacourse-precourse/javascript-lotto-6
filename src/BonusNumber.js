import { Console } from "@woowacourse/mission-utils";
import { 
  USER_INPUT,
  MIN_NUMBER,
  MAX_NUMBER,
  ERROR_MESSAGE
 } from "./constants.js";

class BonusNumber {
  #bonusNumber;
  #targetNumber;

  constructor(targetNumber) {
    this.#bonusNumber = 0;
    this.#targetNumber = targetNumber
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  async setBonusNumber() {
    const input = await Console.readLineAsync(USER_INPUT.BONUS_NUMBER);
    const bonusNumber = Number(input);

    try {
      this.checkBonusNumber(bonusNumber);
      this.#bonusNumber = bonusNumber;
    } catch (error){
      Console.print(error);
    }
  }

  checkBonusNumber(bonusNumber) {
    if (bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER) throw ERROR_MESSAGE.BONUS_NUM_MIN_MAX;
    
    if (isNaN(bonusNumber)) throw ERROR_MESSAGE.BONUS_NUM_STRING;

    if (this.#targetNumber.includes(bonusNumber)) throw ERROR_MESSAGE.BONUS_NUM_DUPLICATE;
  }
}

export default BonusNumber;