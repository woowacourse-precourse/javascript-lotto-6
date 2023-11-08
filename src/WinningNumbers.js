
class WinningNumbers {
    constructor(numbers) {
        this.validate(numbers);
        this.value = numbers;
    }

    validate(numbers) {
        const { errorMsg } = checkValue.numbers(nunbers, WINNING_NUMBER);

        if (errorMsg) exitWithError(errorMsg);
    }
}

module.exports = WinningNumbers;