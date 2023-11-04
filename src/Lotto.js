import { CONSTANT } from "./Constant.js";

class Lotto {
    #numbers;

    // numbers = [1,2,3,4,5,6]
    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    // 예외처리
    #validate(numbers) {
        if (
            numbers.length !== 6 ||
            isNaN(element) ||
            !(element >= 1 && element <= 45)
        ) {
            throw new Error(CONSTANT.ERROR_LOTTO_NUM_INPUT);
        }
    }

    // TODO: 추가 기능 구현
    getLottoNum() {
        return this.#numbers;
    }
}

export default Lotto;
