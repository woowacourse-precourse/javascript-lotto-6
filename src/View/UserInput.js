import { Console } from "@woowacourse/mission-utils";
import { UserInputMessages } from "../constants/UserInputMessages.js";
import { validateBounusNumber, validateDivide, validateNumbers, validateBonusNumberDuplication } from "../validations/InputValidations.js";
import Lotto from "../Model/Lotto.js";

class UserInput {
    async inputPurchaseAmount() {
        const purchaseAmount = await Console.readLineAsync(UserInputMessages.INPUT_PURCHASE_AMOUNT);
        validateNumbers(purchaseAmount);
        validateDivide(purchaseAmount);
        return Number(purchaseAmount)
    }

    async inputWinningNumbers() {
        const winningNumbers = await Console.readLineAsync(UserInputMessages.INPUT_WINNING_NUMBERS);
        const winningLotto = new Lotto(winningNumbers.split(',').map(Number));
        return winningLotto.getLottoNumbers();
    }

    async inputBonusNumber(winningNumbers) {
        const bonusNumber = await Console.readLineAsync(UserInputMessages.INPUT_BONUSE_NUMBER);
        validateNumbers(bonusNumber);
        validateBounusNumber(bonusNumber);
        validateBonusNumberDuplication(winningNumbers,Number(bonusNumber));
        return Number(bonusNumber)
    }

    printError(errorMessage) {
        return Console.print(errorMessage);
    }
}

export default UserInput;