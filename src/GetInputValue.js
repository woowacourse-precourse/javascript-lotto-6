import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/gameConstant";
import Validation from "./Validation";

let global;
class GetInputValue{
	static async getPurchaseAmount(){
		try {
			const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.INPUT_PURCHASE_AMOUNT);
			Validation.validPurchaseAmount(purchaseAmount);
			return purchaseAmount;
		} catch (error) {
      		Console.print(error.message);
			return await this.getPurchaseAmount();
		}
	}

	static async getWinningNumbers(){
		try {
			const winningNumbers = await Console.readLineAsync(INPUT_MESSAGE.INPUT_WINNING_NUMBERS);
			const checkWinningNumbers = winningNumbers.split(',');
			global = checkWinningNumbers;
			checkWinningNumbers.sort();
			for(let i=0; i<checkWinningNumbers.length; i++){
				checkWinningNumbers[i] = Number(checkWinningNumbers[i]);
			}
			Validation.validWinningNumber(checkWinningNumbers);
			return checkWinningNumbers;
		} catch (error) {
      		Console.print(error.message);
			return await this.getWinningNumbers();
		}
	}

	static async getBonusNumber(){
		try {
			const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BONUS_NUMBER);
			Validation.validBonusNumber(global, bonusNumber);
			return bonusNumber;
		} catch (error) {
      	Console.print(error.message);
			return await this.getBonusNumber();
		}
	}
}

export default GetInputValue;