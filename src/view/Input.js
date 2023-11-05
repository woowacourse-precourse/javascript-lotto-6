import { Console } from "@woowacourse/mission-utils";
import { GAMEMSG_INPUT_MONEY, GAMEMSG_INPUT_WINNING_LOTTO, GAMEMSG_INPUT_BONUS_NUMBER } from "../constants/GameMessage";

class Input{
    constructor () {}

    static async inputMoney(){
        const inputMoney = await Console.readLineAsync(GAMEMSG_INPUT_MONEY);
        return inputMoney;
    }

    static async inputWinningLotto(){
        const inputWinningLotto = await Console.readLineAsync(GAMEMSG_INPUT_WINNING_LOTTO);
        return inputWinningLotto;
    }

    static async inputBonusNumber(){
        const inputBonusNumber = await Console.readLineAsync(GAMEMSG_INPUT_BONUS_NUMBER);
        return inputBonusNumber;
    }
}

export default Input;