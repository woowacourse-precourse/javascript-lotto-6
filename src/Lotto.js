import { CONSTANT } from "./Constant.js";
import Controller from "./Controller.js";

class Lotto {
    #numbers;

    // numbers = [1,2,3,4,5,6]
    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    // 예외처리
    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error(CONSTANT.ERROR_LOTTO_NUM_INPUT);
        }
        numbers.forEach((element) => {
            if (!Controller.isAllowedLottoNum(element))
                throw new Error(CONSTANT.ERROR_LOTTO_NUM_INPUT);
        });
        const SET = new Set(numbers);
        if (numbers.length != SET.size)
            throw new Error(CONSTANT.ERROR_LOTTO_NUM_INPUT);
    }

    // TODO: 추가 기능 구현
    getLottoNum() {
        return this.#numbers;
    }
}

export default Lotto;
