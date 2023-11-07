import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/gameConstant";
import Validation from "./Validation";

const GetInputValue={
	async getPurchaseAmount(){
		try {
			const purchaseAmount = await Console.readLineAsync(INPUT_MESSAGE.INPUT_PURCHASE_AMOUNT);
			Validation.validPurchaseAmount(purchaseAmount);
			return purchaseAmount;
		} catch (error) {
      Console.print(error.message);
		}
		
	},

	async getWinningNumbers(){
		try {
			const winningNumbers = await Console.readLineAsync(INPUT_MESSAGE.INPUT_WINNING_NUMBERS);
			const checkWinningNumbers = winningNumbers.split(',');
			checkWinningNumbers.sort();
			for(let i=0; i<checkWinningNumbers.length; i++){
				checkWinningNumbers[i] = Number(checkWinningNumbers[i]);
			}
			Validation.validWinningNumber(checkWinningNumbers);
			return checkWinningNumbers;
		} catch (error) {
      Console.print(error.message);
		}
	},

	async getBonusNumber(){
		try {
			const bonusNumber = await Console.readLineAsync(INPUT_MESSAGE.INPUT_BONUS_NUMBER);
			Console.print(bonusNumber);
			Validation.validBonusNumber(checkWinningNumbers, bonusNumber);
			return bonusNumber;
		} catch (error) {
      Console.print(error.message);
		}
	}
}

export default GetInputValue;