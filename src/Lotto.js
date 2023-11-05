import validation from "./utils/valiidation.js";

//보너스 번호를 어디서 관리할 것인가.. 여기가 맞는 것 같긴한데..
class Lotto {
    #numbers;

    constructor(numbers) {
        this.#numbers = [];
        this.#validate(numbers);
    }

    #validate(numbers) {
        validation.isValidInputCount(numbers, 6);
        validation.isValidRange(numbers);
        validation.hasSameNumber(numbers);
    }

    get winningNumbers() {
        return this.#numbers;
    }
}

export default Lotto;
