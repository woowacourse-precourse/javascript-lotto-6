import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants/Message";

export default class Input{
    #chance;
    #bouns;

    constructor() {
        this.#chance = 0;
        this.#bouns = 0;
    }

    async chance() {
        const chance = await Console.readLineAsync(MESSAGE.PURCHASE_INPUT);
    }
}
