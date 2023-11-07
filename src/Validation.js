import { ERROR_MESSAGE } from "./constants/errorMessage";

class Validation{
	static validPurchaseAmount(money){
		const inputWithoutSpaces = String(money).split(" ").join("");
		if(isNaN(money) && inputWithoutSpaces.length!==0) {
			throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
		}
		if(money === '' || inputWithoutSpaces === ''){
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
		for(let i=0; i<numbers.length; i++){
			if(numbers[i]>45 || numbers[i]<1){
				throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
			}
			if(isNaN(numbers[i])){
				throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
			}
		}
	}

	static validBonusNumber(winningNumbers,bonus){
		const inputWithoutSpaces = String(bonus).split(" ").join("");
		if(bonus === '' || inputWithoutSpaces === ''){
			throw new Error(ERROR_MESSAGE.NO_INPUT);
		}
		if(isNaN(bonus)){
			throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
		}
		if(bonus<1 || bonus>45){
			throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
		}
		if(winningNumbers.includes(bonus)){
		  throw new Error(ERROR_MESSAGE.ALREADY_EXIST);
		}
	}
}

export default Validation;