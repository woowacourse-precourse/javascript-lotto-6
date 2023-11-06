import { REGEX, LOTTO_RULE } from "../constants/BusinessNumber.js";
import { LOTTO_ERROR } from "../constants/Messeage.js";
import CustomError from "./CustomError.js";
import Lotto from "../Lotto.js";

export const validatePurchaseAmount = (amountString) => {
  if (REGEX.number.test(amountString)) {
    throw new CustomError(LOTTO_ERROR.form);
  }

  if (Number(amountString) > LOTTO_RULE.buyMax) {
    throw new CustomError(LOTTO_ERROR.buyLimit);
  }

  if (Number(amountString) < LOTTO_RULE.buyUnit) {
    throw new CustomError(LOTTO_ERROR.moneyLack);
  }

  if(Number(amountString) % LOTTO_RULE.buyUnit !== 0) {
    throw new CustomError(LOTTO_ERROR.unitBreak);
  }
};

export const validateLuckyNumbers = (luckyString) => {
  if (REGEX.commaNumber.test(luckyString)) {
    throw new CustomError(LOTTO_ERROR.form);
  }

  const luckyNumbers = luckyString.split(',').map(Number);
  const lotto = new Lotto(luckyNumbers);

  return lotto.getLuckyNumbers();
}

export const validateBonusNumber = (bonus, luckyNumberArray) => {
  if (REGEX.number.test(bonus)) {
    throw new CustomError(LOTTO_ERROR.form);
  }

  if (Number(bonus) > LOTTO_RULE.maxNumber || Number(bonus) < LOTTO_RULE.minNumber) {
    throw new CustomError(LOTTO_ERROR.luckyRange);
  }

  if (luckyNumberArray.includes(Number(bonus))) {
    throw new CustomError(LOTTO_ERROR.bonusConflict);
  } 
};
