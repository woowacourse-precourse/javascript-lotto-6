import { Console } from "@woowacourse/mission-utils";
import ERRORS from "./constant/Errors.js";

class LottoUI {

    static #validate_number(input) {
        const number = Number(input);
        return !Number.isNaN(number);
    }

    static #validate_amount(input) {
        const amount = Number(input);
        return !Number.isNaN(amount) && amount % 1000 === 0;
    }

    static #validate_winning_number(input){
        const numbers = input.split(',').map(n => n.trim());

        const allNumbers = numbers.every(n => !isNaN(n) && n.trim() !== '');

        const validLength = numbers.length === 6;
        const withinRange = numbers.every(n => n >= 1 && n <= 45);

        return allNumbers && validLength && withinRange;
    }
    static print_console(message) {
        Console.print(message);
    }

    static input_purchase_amount() {
        return Console.readLineAsync(":")
            .then((answer) => {
                if (!this.#validate_number(answer)) throw new Error(ERRORS.NUMBER_REQUIRED);
                if (!this.#validate_amount(answer)) throw new Error(ERRORS.AMOUNT_NOT_POSSIBLE);
                // TODO : ENTER 시에 , 게임이 진행되는 버그 존재
                // TODO : 입력이 0 인 경우에도 게임이 진행되는 버그 존재
                return answer;
            });
    }

    static input_winning_number () {
        return Console.readLineAsync(":")
            .then((answer) => {
                if ( !this.#validate_winning_number(answer) ) throw new Error(ERRORS.WINNING_NUMBER);
                return answer ;
            });
    }

    static input_bonus_number () {
        return Console.readLineAsync(":")
            .then((answer) => {

                return answer ;
            });
    }
}

export default LottoUI;
