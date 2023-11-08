"use strict";
import { Console } from "@woowacourse/mission-utils";
import CONDITIONS from "./constants/Conditions";
import MESSAGES from "./constants/Messages";

export default class Purchase {
    #inputMoney;
    tickets;

    async init() {
        this.#inputMoney = Number(
            await Console.readLineAsync(MESSAGES.PUT_MONEY)
        );
        Console.print(this.#inputMoney);
        this.countTickets();
    }

    countTickets() {
        this.tickets = Math.floor(this.#inputMoney / CONDITIONS.PRICE_OF_LOTTO);
        Console.print(`${this.tickets}${MESSAGES.PURCHASED}`);
    }
}
