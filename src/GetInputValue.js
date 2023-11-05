import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/gameConstant";

class GetInputValue{
    async getPurchaseAmount(){
        const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.INPUT_PURCHASE_AMOUNT);
        return purchaseAmount;
    }

    async getWinningNumbers(){
        const winningNumbers = await Console.readLineAsync(INPUT_MESSAGE.INPUT_WINNING_NUMBERS);
        return winningNumbers;
    }

    async getBonusNumber(){
        const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BONUS_NUMBER);
        return bonusNumber;
    }
}

export default GetInputValue;