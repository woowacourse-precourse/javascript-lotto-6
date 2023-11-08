import {validate} from "./validation.js";

export class BonusNumber {
    constructor(bonusNumber, winningNumbers) {
        this.value = bonusNumber;
    }

    validate(bonusNumber, winningNumbers) {
        validate.bonusNumber(bonusNumber, winningNumbers);
    }
}