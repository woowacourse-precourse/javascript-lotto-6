import { CONSTANT } from "./Constant.js";

class Lotto {
    #numbers;

    // numbers = [1,2,3,4,5,6] or "1,2,3,4,5,6"
    constructor(numbers) {
        this.#validate(numbers);
        // [1,2,3,4,5,6]
        this.#numbers = numbers;
    }

    // 예외처리
    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error(CONSTANT.ERROR);
        }
        numbers.forEach((element) => {
            if (!(element >= 1 && element <= 45))
                throw new Error(CONSTANT.ERROR);
        });
        let tmp = new Set(numbers);
        if (tmp.size != numbers.length) throw new Error(CONSTANT.ERROR);
    }

    // TODO: 추가 기능 구현
    getNum() {
        return this.#numbers;
    }
}

export default Lotto;
