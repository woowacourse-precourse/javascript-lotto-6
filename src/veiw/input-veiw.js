import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";
import InputValidator from "../validation/input-validation.js";

class InputVeiw{
    async readPurchaseAmount() {
        const inputPrice = await Console.readLineAsync(INPUT_MESSAGE.inputPurchaseAmount);
        InputValidator.perchaseRangeValidation(inputPrice);
        InputValidator.inputPerChaseValidation(inputPrice);
        return inputPrice / 1000;
    }

    async readWinningNumber() {
        return null;
    }
}

export default InputVeiw;