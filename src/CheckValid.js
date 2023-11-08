import { ERROR_MESSAGE, TICKET_UNIT } from './Constant.js';

class CheckValid {
  constructor() {}

  static checkMoney(money) {
    if (/[^0-9]/.test(money)) throw new Error(ERROR_MESSAGE.CHECK_MONEY);
    if (money.length === 0) throw new Error(ERROR_MESSAGE.CHECK_MONEY);
    if (Number(money) % TICKET_UNIT > 0)
      throw new Error(ERROR_MESSAGE.CHECK_MONEY);
    if (Number(money) <= 0) throw new Error(ERROR_MESSAGE.CHECK_MONEY);
  }

  static checkWinNumber(winNumberArray) {
    const winNumber = String(winNumberArray).split(',');
    if (winNumberArray.length === 0)
      throw new Error(ERROR_MESSAGE.CHECK_WIN_NUMBER);
    if (winNumber.length !== 6) throw new Error(ERROR_MESSAGE.CHECK_WIN_NUMBER);
    if (winNumber.length !== new Set(winNumber).size)
      throw new Error(ERROR_MESSAGE.CHECK_WIN_NUMBER);
    if (
      winNumber.filter((number) => Number(number) < 1 || Number(number) > 45)
        .length > 0
    )
      throw new Error(ERROR_MESSAGE.CHECK_WIN_NUMBER);
    if (/[^\d,]/.test(winNumber))
      throw new Error(ERROR_MESSAGE.CHECK_WIN_NUMBER);
  }

  static checkBonusNumber(bonusNumber, winNumberArray) {
    if (bonusNumber.length === 0)
      throw new Error(ERROR_MESSAGE.CHECK_BONUS_NUMBER);
    if (winNumberArray.includes(Number(bonusNumber)))
      throw new Error(ERROR_MESSAGE.CHECK_BONUS_NUMBER);
    if (Number(bonusNumber) > 45 || Number(bonusNumber) < 1)
      throw new Error(ERROR_MESSAGE.CHECK_BONUS_NUMBER);
    if (Number.isNaN(Number(bonusNumber)))
      throw new Error(ERROR_MESSAGE.CHECK_BONUS_NUMBER);
  }
}

export default CheckValid;
