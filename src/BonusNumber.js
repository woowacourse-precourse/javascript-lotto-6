const validation = require("./Validation.js");

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    validation.checkBonusNum(bonusNumber, winningNumbers);
  }
}

module.exports = BonusNumber;
