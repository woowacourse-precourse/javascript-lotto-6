import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";
import InputValidator from "../validator/input-validator.js";
import LottoValidator from "../validator/lotto-validator.js";
import LottoBonusValidator from "../validator/lotto-bonus-validator.js";

class InputView {
    async readPurchaseAmount() {
        const inputPrice = await Console.readLineAsync(INPUT_MESSAGE.inputPurchaseAmount);

        InputValidator.purchaseRangeValidation(inputPrice);
        InputValidator.inputPurchaseValidation(inputPrice);
        return inputPrice / 1000;
    }

    async readWinningNumber() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.inputWinningNumbers);
        const winningNumbers = input.split(",").map(Number);

        LottoValidator.lottoLengthValidation(winningNumbers);
        LottoValidator.lottoDuplicatedValidation(winningNumbers);
        LottoValidator.lottoRangeValidation(winningNumbers);
        LottoValidator.lottoTypeValidation(winningNumbers);
        return winningNumbers;
    }

    async readBonusNumber() {
        const input = await Console.readLineAsync(INPUT_MESSAGE.inputBonusNumber);
        const bonusNumber = input.split(",").map(Number);

        LottoBonusValidator.bonusLengthValidation(bonusNumber);
        LottoBonusValidator.bonusRangeValidation(bonusNumber);
        LottoBonusValidator.bonusTypeValidation(bonusNumber[0]);
        return bonusNumber[0];
    }
}

export default InputView;