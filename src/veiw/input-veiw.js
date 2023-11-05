import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";
import { inputPerChaseValidation } from "../validation/input-validation.js";

class InputVeiw{
    async readPurchaseAmount() {
        const inputPrice = await Console.readLineAsync(INPUT_MESSAGE.inputPurchaseAmount);
        if (inputPrice <= 0){
            throw new Error("[ERROR]");
        }
        inputPerChaseValidation(inputPrice);
        return inputPrice / 1000;
    }

    async readWinningNumber() {
        return null;
    }
}

export default InputVeiw;