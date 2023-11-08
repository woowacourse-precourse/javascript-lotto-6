import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants/Message";

export default class Input{
    async InputMoney(){
        const inputMoney = await Console.readLineAsync(MESSAGE.PURCHASE_INPUT);
        Console.print(inputMoney)
        return inputMoney
    }

    async inputWinningNum(){
        const inputWinningNum = await Console.readLineAsync(MESSAGE.WINNIG_NUM_INPUT);
        return inputWinningNum
    }

    async inputBonusNum(){
        const inputBonusNum = await Console.readLineAsync(MESSAGE.BONUS_NUM_INPUT);
        return inputBonusNum
    }
}
