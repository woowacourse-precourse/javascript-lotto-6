import CheckBonusNumber from './Validation/BonusNumber.js'

export default class Bonus {
    constructor(number, winningNumbers){
        this.validate(number, winningNumbers)
        this.value = number;
    }
   
    validate(bonus, win) {
        CheckBonusNumber.checkBonunsNumber(bonus, win)
    }
}

