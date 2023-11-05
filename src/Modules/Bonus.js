import { ERROR } from "../constants/messages";
import { Console } from "@woowacourse/mission-utils";


class Bonus { //예외처리 및 값 저장
    #bonus;
    pass;
    
    constructor(bonus) {
        this.#bonus = bonus;
        this.#validate();
    }

    #validate() {
        try {
            this.pass = true;
            if (this.#bonus < 1 || this.#bonus > 45) throw new Error(BONUS_RANGE);
            if (numbers.split(',').map(Number).includes(this.#bonus)) throw new Error(BONUS_DUPLICATE);
            if (isNaN(this.#bonus)) throw new Error(BONUS_INCLUDE);
        }
        catch {
            this.pass = false;
            Console.print(error.message);
        }
    }
}

export default Bonus;