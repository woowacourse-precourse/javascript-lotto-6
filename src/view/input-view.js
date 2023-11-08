import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";
import InputValidator from "../validator/input-validator.js";
import WinningLotto from "../domain/WinningLotto.js";

class InputView {
    async readPurchaseAmount() {
        try{
            const inputPrice = await Console.readLineAsync(INPUT_MESSAGE.inputPurchaseAmount);

            InputValidator.purchaseRangeValidation(inputPrice);
            InputValidator.inputPurchaseValidation(inputPrice);
            return inputPrice / 1000;
        }
        catch(error){
            Console.print(error);
            await this.readPurchaseAmount();
        }
    }

    async readWinningLotto() {
        try{
            const readWinningNumber = await Console.readLineAsync(INPUT_MESSAGE.inputWinningNumbers);
            const winningNumbers = readWinningNumber.split(",").map(Number);

            const readBonusNumber = await Console.readLineAsync(INPUT_MESSAGE.inputBonusNumber);
            const bonusNumber = readBonusNumber.split(",").map(Number);

            const winningLotto = new WinningLotto(winningNumbers, bonusNumber);

            return winningLotto;
        }
        catch(error){
            Console.print(error);
            await this.readWinningLotto();
        }
    }
}

export default InputView;