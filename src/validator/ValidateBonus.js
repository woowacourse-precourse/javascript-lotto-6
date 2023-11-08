import ValidateInputNumber from "./ValidateInputNumber.js";
import { ERROR_MESSAGE } from "../constant/Error.js";
export function validateBonus(bonusStr, winningNumber) {
  const bonus = Number(bonusStr);
  ValidateInputNumber.checkEmpty(bonusStr);
  ValidateInputNumber.checkString(bonus);
  ValidateInputNumber.checkNaturalNumber(bonus);
  ValidateInputNumber.checkLottoNumber(bonus);
  checkBonusWinningNumber(bonus, winningNumber);
}

function checkBonusWinningNumber(bonus, winningNumber) {
  if (winningNumber.getNumbers().includes(bonus)) {
    throw new Error(ERROR_MESSAGE.bonusWinningDuplication);
  }
}
