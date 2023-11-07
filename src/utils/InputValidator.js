export const InputValidator = {
  validMoney(money) {
    if (!money) return false;
    if (money % 1000 !== 0) return false;
    if (isNaN(money)) return false;
    return true;
  },
  validWinningNumber(num) {
    if (!num) return false;
    if (!num.includes(",")) return false;
    return true;
  },
  validBonusNumber(num) {
    if (!num) return false;
    if (num < 1 || num > 45) return false;
    if (isNaN(num)) return false;
    return true;
  },
};
