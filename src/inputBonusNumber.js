import {validate} from "./validation.js";

export class WinningNumbers {
    constructor(winningNumbers) {
        this.value = winningNumbers;
    }

    validate(winningNumber) {
        validate.winningNumbers(winningNumber);
    }
}