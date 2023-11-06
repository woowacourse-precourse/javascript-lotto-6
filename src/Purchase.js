"use strict";
import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./constants/Messages";
import CONDITIONS from "./constants/Conditions";

export default class Purchase {
    /** * @type {number} */
    #inputMoney;
    /** * @type {number} */
    #tickets;

    constructor() {
        this.#inputMoney = Number(Console.readLineAsync(MESSAGES.PUT_MONEY));
    }

    printMoney() {
        Console.print(`${this.#inputMoney}`);
    }

    countTickets() {
        this.#tickets = Math.floor(
            this.#inputMoney / CONDITIONS.PRICE_OF_LOTTO
        );
    }
}
