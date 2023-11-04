import { Console } from "@woowacourse/mission-utils";
import { REGEX, LOTTO_RULE } from "../constants/BusinessNumber.js";
import { LOTTO_PLAY, LOTTO_ERROR } from "../constants/Messeage.js";
import CustomError from "../error/CustomError.js";
import Lotto from "../Lotto.js";
//문자열을 다루는 곳
class Input {
  luckyArray;

  static async lottoAmount() {
    const amount = await Console.readLineAsync(LOTTO_PLAY.inputAmount);
    this.validateAmount(amount);
    
    return Number(amount);
  }

  static async luckyNumber() {
    const lucky = await Console.readLineAsync(LOTTO_PLAY.inputLucky);
    this.validateLuckyNumber(lucky);
    
    const lotto = new Lotto(lucky.split(','));
    this.luckyArray = lotto.getLuckyArray();
 
    return lotto.getLuckyArray();
  }

  static async bonusNumber() {
    const bonusNumber = await Console.readLineAsync(LOTTO_PLAY.inputBonus);
    this.validateBonusNumber(bonusNumber);

    return this.luckyArray.concat(Number(bonusNumber)); // 최종 리턴 : [..행운배열,보스너번호] 
  }

  static validateAmount(amount) {
    if (REGEX.number.test(amount)) {
      throw new CustomError(LOTTO_ERROR.form);
    }
    if (Number(amount) > LOTTO_RULE.buyMax) {
      throw new CustomError(LOTTO_ERROR.buyLimit);
    }
    if (Number(amount) < LOTTO_RULE.buyUnit) {
      throw new CustomError(LOTTO_ERROR.moneyLack);
    }
    if (Number(amount) % LOTTO_RULE.buyUnit !== 0) {
      throw new CustomError(LOTTO_ERROR.unitBreak);
    }
  }

  static validateLuckyNumber(luckyNumber) {
    if (REGEX.commaNumber.test(luckyNumber)) {
      throw new CustomError(LOTTO_ERROR.form);
    }
  }

  static validateBonusNumber(bonusNumber) {
    if (REGEX.number.test(bonusNumber)) {
      throw new CustomError(LOTTO_ERROR.form);
    }

    if (Number(bonusNumber) > LOTTO_RULE.maxNumber || Number(bonusNumber) < LOTTO_RULE.minNumber) {
      throw new CustomError(LOTTO_ERROR.luckyRange);
    }
    
    this.luckyArray.forEach((number) => {
      if (number === Number(bonusNumber)) {
        throw new CustomError(LOTTO_ERROR.bonusConflict);
      }
    })
  }
}

export default Input;

/*
const test = async () => {
  await Input.lottoAmount()
  await Input.luckyNumber()
  const confidentialArray = await Input.bonusNumber();
  console.log(confidentialArray);
}

test();*/

