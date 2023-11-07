import ValidateInputNumber from "./ValidateInputNumber.js";

export function validateBonus(bonusStr) {
  const bonus = Number(bonusStr);
  ValidateInputNumber.checkEmpty(bonusStr);
  ValidateInputNumber.checkString(bonus);
  ValidateInputNumber.checkNaturalNumber(bonus);
  ValidateInputNumber.checkLottoNumber(bonus);
}
