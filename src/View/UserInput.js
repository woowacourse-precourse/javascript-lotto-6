import { Console } from "@woowacourse/mission-utils";
import { UserInputMessages } from "../constants/UserInputMessages.js";

class UserInput {
    async inputPurchaseAmount() {
        const purchaseAmout = Console.readLineAsync(UserInputMessages.INPUT_PURCHASE_AMOUNT).map(Number);
        return purchaseAmout
    }

    async inputWinningNumbers() {
        const WinningNumbers = Console.readLineAsync(UserInputMessages.INPUT_WINNING_NUMBERS).split(',').map(Number);
        return WinningNumbers
    }

    async inputBonusNumber() {
        const BonusNumber = Console.readLineAsync(UserInputMessages.INPUT_BONUSE_NUMBER).map(Number);
        return BonusNumber
    }
}

export default UserInput;