import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";
import InputValidator from "../validator/input-validator.js";
import WinningLotto from "../domain/WinningLotto.js";

class InputView {
    async readPurchaseAmount() {
        const inputPrice = await Console.readLineAsync(INPUT_MESSAGE.inputPurchaseAmount);

        InputValidator.purchaseRangeValidation(inputPrice);
        InputValidator.inputPurchaseValidation(inputPrice);
        return inputPrice / 1000;
    }

    async readWinningLotto() {
        const readWinningNumber = await Console.readLineAsync(INPUT_MESSAGE.inputWinningNumbers);
        const winningNumbers = readWinningNumber.split(",").map(Number);

        const readBonusNumber = await Console.readLineAsync(INPUT_MESSAGE.inputBonusNumber);
        const bonusNumber = readBonusNumber.split(",").map(Number);

        const winningLotto = new WinningLotto(winningNumbers, bonusNumber);

        return winningLotto;
    }
}

export default InputView;