"use strict";
import { Random } from "@woowacourse/mission-utils";
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

    /**
     * 로또 랜덤 번호를 생성하는 함수
     */
    buy(tickets) {
        for (let i = 0; i < tickets; i++) {
            this.#numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
            this.#numbers.sort((a, b) => a - b);
            Console.print(this.#numbers);
        }
    }
}

export default Lotto;
