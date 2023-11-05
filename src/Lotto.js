import validation from "./utils/valiidation.js";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#numbers = numbers;
        this.#validate(numbers);
    }

    #validate(numbersArr) {
        numbersArr.forEach((number) => {
            validation.isValidNumber(number);
        })
        validation.isValidInputCount(numbersArr, 6);
        validation.isValidRange(numbersArr);
        validation.hasSameNumber(numbersArr);
    }

    get winningNumbers() {
        return this.#numbers;
    }
}

export default Lotto;
