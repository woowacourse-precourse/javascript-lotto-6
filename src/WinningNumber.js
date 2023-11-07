import CheckNumber from './Validation/WinningNumber.js'

export default class Winning {
    constructor(input) {
        this.validate(input)
        this.value = input
    }

    validate(input) {
        CheckNumber.checkWinningNuber(input)
    }
}
