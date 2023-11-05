import { Console } from "@woowacourse/mission-utils";
import { GAMEMSG_INPUT_MONEY } from "../constants/GameMessage";

class Input{
    constructor () {}

    static async inputMoney(){
        const inputMoney = await Console.readLineAsync(GAMEMSG_INPUT_MONEY);
        return inputMoney;
    }
}

export default Input;