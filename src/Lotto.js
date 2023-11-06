"use strict";
import Purchase from "./Purchase";
class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    // TODO: 추가 기능 구현
    play() {
        const purchase = new Purchase();
        purchase.putMoney();
    }
}

export default Lotto;
