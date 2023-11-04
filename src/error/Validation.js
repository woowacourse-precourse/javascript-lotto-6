import { REGEX, LOTTO_RULE } from "../constants/BusinessNumber.js";

//검증시 파라미터는 입력받은 문자열을 온전히 받아들인다.
export const validatePurchaseAmount = (amount) => {
  if (
    REGEX.number.test(amount)
    || Number(amount) > LOTTO_RULE.buyMax
    || Number(amount) < LOTTO_RULE.buyUnit
    || Number(amount) % LOTTO_RULE.buyUnit !== 0
  ) throw new Error("[ERROR] 해응해응")
};


// luckyNumberArray 는 숫자로된 배열이다
export const validateBonusNumber = (bonus, luckyNumberArray) => {
  if (
    REGEX.number.test(bonus)
    || Number(bonus) > LOTTO_RULE.maxNumber
    || Number(bonus) < LOTTO_RULE.minNumber
  ) throw new Error("[ERROR] 보너스 숫자오류 1")

  if (luckyNumberArray.includes(Number(bonus))) throw new Error("[ERROR] 보너스 숫자 오류 2");
}

/*
const a = "47";
const b = [1,2,3,4,5,6];
console.log(validateBonusNumber(a,b));*/

