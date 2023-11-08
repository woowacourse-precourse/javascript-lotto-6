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
        const winningNumbers = await Console.readLineAsync(INPUT_MESSAGE.inputWinningNumbers);
        LottoValidator.lottoLengthValidation(winningNumbers);
        LottoValidator.lottoDuplicatedValidation(winningNumbers);
        LottoValidator.lottoRangeValidation(winningNumbers);
        LottoValidator.lottoTypeValidation(winningNumbers);
        return winningNumbers;
    }

    async readBonusNumber() {
        const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.inputBonusNumber);
        LottoBonusValidator.bonusLengthValidation(bonusNumber);
        LottoBonusValidator.bonusRangeValidation(bonusNumber);
        LottoBonusValidator.bonusTypeValidation(bonusNumber);
        return bonusNumber;
    }
}

export default InputView;