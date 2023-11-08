import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, GAME_MESSAGE } from './constants/message';

class BonusNumValidator {
  #winnerLotto;
  #bonusNum;

  constructor(winnerLotto) {
    this.#winnerLotto = winnerLotto;
  }

  /**
   * 
   * @description 유효성 검사를 통과할 때 까지 보너스 번호를 입력받는 함수
   */
  async getBonusNum() {
    let inputBonusNum;
    let valid;

    do {
      inputBonusNum = await Console.readLineAsync(GAME_MESSAGE.promptBonusNum);
      Console.print(inputBonusNum);
      valid = this.validateBonusNum(inputBonusNum);
    } while (!valid);

    this.#bonusNum = inputBonusNum;
  }

  /**
   * 
   * @description 보너스 번호의 유효성 검사를 하는 함수
   * @param {number} inputBonusNum 보너스 번호
   * @returns 유효성 검사 통과 여부
   */
  validateBonusNum(inputBonusNum) {
    try {
      if (inputBonusNum === true || inputBonusNum === false || isNaN(inputBonusNum)) throw new Error(ERROR_MESSAGE.invalidBonusNumNotPositiveInt);
      if(inputBonusNum < 1 || inputBonusNum > 45) throw new Error(ERROR_MESSAGE.invalidBonusNumRange);
      this.#winnerLotto.forEach(winnerLottonum => {
        if(winnerLottonum === Number(inputBonusNum)) throw new Error(ERROR_MESSAGE.invalidBonusNumDuplicate);
      });
      
      return true; 
    } catch (error) {
      Console.print(error.message);
      return false;
    }
  }

  get bonusNum() {
    return this.#bonusNum;
  }
}

export default BonusNumValidator;