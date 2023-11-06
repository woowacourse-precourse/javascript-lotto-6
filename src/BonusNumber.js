
class BonusNumber {
    constructor(BonusNumber, WinningNumbers) {
        this.validate(bonusNumber, winningNumbers);
        this.value = bonusNumber;
    }
    validate(bonusNumber, winningNumbers) {
        const { errorMsg } = checkValue(bonusNumber, winningNumbers);

        if(errorMsg) exitWithError(errorMsg);
    }
}

module.exports = BonusNumber;