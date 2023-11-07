import { ERROR_MESSAGE } from "./constants/errorMessage";

class Validation{
	static validPurchaseAmount(money){
		if(isNaN(money)) {
			throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
		}
		if(money === ''){
			throw new Error(ERROR_MESSAGE.NO_INPUT);
		}
		if(money <= 0 || money%1000!==0){
			throw new Error(ERROR_MESSAGE.WRONG_UNIT_OF_MONEY);
		}
	}

	static validWinningNumber(numbers){
		if (numbers.length !== 6) {
			throw new Error(ERROR_MESSAGE.NO_WINNING_NUMBERS);
		}
		if (new Set(numbers).size !== 6) {
			throw new Error(ERROR_MESSAGE.INPUT_DUPLICATION);
		}
		for(let i=0; i<6; i++){
			if(parseInt(numbers[i])>45 || parseInt(numbers[i])<1){
				throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
			}
			if(isNaN(numbers[i])){
				throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
			}
		}
	}

	static validBonusNumber(winningNumbers,bonus){
		if(bonus === ''){
			throw new Error(ERROR_MESSAGE.NO_INPUT);
		}
		if(isNaN(bonus)){
			throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
		}
		if(winningNumbers.includes(bonus)){
		  throw new Error(ERROR_MESSAGE.ALREADY_EXIST);
		}
	}
}

export default Validation;