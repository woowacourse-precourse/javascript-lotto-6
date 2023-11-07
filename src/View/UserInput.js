import { Console } from "@woowacourse/mission-utils";
import { UserInputMessages } from "../constants/UserInputMessages.js";
import { validateBounusNumber, validateDivide, validateNumbers } from "../validations/InputValidations.js";
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
        return winningLotto
    }

    async inputBonusNumber() {
        const bonusNumber = await Console.readLineAsync(UserInputMessages.INPUT_BONUSE_NUMBER);
        validateNumbers(bonusNumber);
        validateBounusNumber(bonusNumber)
        return Number(bonusNumber)
    }
}

export default UserInput;