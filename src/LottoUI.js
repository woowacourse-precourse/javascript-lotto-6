import {Console} from "@woowacourse/mission-utils";
import MESSAGES from "./constant/Messages.js";
import ERRORS from "./constant/Errors.js";

class LottoUI {
    #Console;

    constructor() {
        this.#Console = Console;
    }

    #validate_number(input) {
        const number = Number(input);
        return !Number.isNaN(number) ;
    }
    #validate_amount(input) {
        const amount = Number(input);
        return !Number.isNaN(amount) && amount % 1000 === 0;
    }

    static print_console(message) { Console.print(message); }
    static input_purchase_amount() {
        return Console.readLineAsync(MESSAGES.INPUT_PURCHASE_AMOUNT)
            .then((answer) => {
                if (!this.#validate_number(answer)) throw new Error(ERRORS.NUMBER_REQUIRED);
                if (!this.#validate_amount(answer)) throw new Error(ERRORS.AMOUNT_NOT_POSSIBLE);
                return answer;
            });
    }


}
export  default  LottoUI;