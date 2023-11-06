import { Console } from "@woowacourse/mission-utils";
import { GAMEMSG_INPUT_MONEY, GAMEMSG_INPUT_WINNING_LOTTO, GAMEMSG_INPUT_BONUS_NUMBER } from "../constants/GameMessage.js";

class Input{
    constructor () {}

    static async inputMoney(){
        const inputMoney = await Console.readLineAsync(GAMEMSG_INPUT_MONEY);
        if(Number.isNaN(Number(inputMoney))){ Console.print("[ERROR]");throw new Error("[ERROR]");}
        return inputMoney;
    }

    static async inputWinningLotto(){
        const inputWinningLotto = await Console.readLineAsync(GAMEMSG_INPUT_WINNING_LOTTO);
        return inputWinningLotto;
    }

    static async inputBonusNumber(){
        const inputBonusNumber = await Console.readLineAsync(GAMEMSG_INPUT_BONUS_NUMBER);
        return Number.parseInt(inputBonusNumber, 10);
    }
}

export default Input;