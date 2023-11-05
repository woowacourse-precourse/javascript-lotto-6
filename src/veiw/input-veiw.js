import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

class InputVeiw{
    async readPurchaseAmount(){
        const inputMoney = await Console.readLineAsync(INPUT_MESSAGE.inputPurchaseAmount);
        return inputMoney/1000;
    }

    async readWinningNumber(){
        return null;
    }
}

export default InputVeiw;