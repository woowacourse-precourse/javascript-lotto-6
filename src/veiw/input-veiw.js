import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

class InputVeiw{
    async readPurchaseAmount() {
        const inputMoney = await Console.readLineAsync(INPUT_MESSAGE.inputPurchaseAmount);
        if (inputMoney%1000 != 0) {
            throw new Error("[ERROR] 구입금액은 1000으로 나누어 떨어지는 수 입니다.");
        }
        return inputMoney/1000;
    }

    async readWinningNumber() {
        return null;
    }
}

export default InputVeiw;