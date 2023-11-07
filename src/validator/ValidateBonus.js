import ValidateInputNumber from "./ValidateInputNumber.js";

export function validateBonus(bonus) {
  ValidateInputNumber.checkString(bonus);
  ValidateInputNumber.checkNaturalNumber(bonus);
  ValidateInputNumber.checkLottoNumber(bonus);
}
