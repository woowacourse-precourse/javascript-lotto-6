import { Console } from "@woowacourse/mission-utils";
import OutputMessages from "../constants/OutputMessages.js";

class Output {

    printLotto(lotto) {
        Console.print('\n'+lotto.length+OutputMessages.PRINT_PURCHASE_QUANTITY);
        for (let i = 0; i < lotto.length; i++) {
            Console.print(lotto[i]);
        }
    }
}

export default Output;