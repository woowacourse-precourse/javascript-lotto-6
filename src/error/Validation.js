import { REGEX, LOTTO_RULE } from "../constants/BusinessNumber.js";
import CustomError from "./CustomError.js";
import { LOTTO_ERROR } from "../constants/Messeage.js";
import Lotto from "../Lotto.js";

//검증시 파라미터는 입력받은 문자열을 온전히 받아들인다.
export const validatePurchaseAmount = (amount) => {
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
};

export const validateLuckyNumber = (lucky) => {
  if (REGEX.commaNumber.test(lucky)) {
    throw new CustomError(LOTTO_ERROR.form);
  }

  new Lotto(lucky.split(','));
};
// luckyNumberArray 는 숫자로된 배열이다
export const validateBonusNumber = (bonus, luckyNumberArray) => {
  if (REGEX.number.test(bonus)) {
    throw new CustomError(LOTTO_ERROR.form);
  }

  if (Number(bonus) > LOTTO_RULE.maxNumber || Number(bonus) < LOTTO_RULE.minNumber) {
    throw new CustomError(LOTTO_ERROR.luckyRange);
  }
  
  luckyNumberArray.forEach((number) => {
    if (number === Number(bonus)) {
      throw new CustomError(LOTTO_ERROR.bonusConflict);
    }
  })
}

