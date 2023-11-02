import lottoNumber from '../constants/lottoNumber.js';

class CheckLotto {
	static getCorrectCount(lottoNumberList, winningNumberList) {
		return lottoNumberList.reduce((count, lottoNumber) => {
			if (winningNumberList.includes(lottoNumber)) {
				return count + 1;
			}
			return count;
		}, 0);
	}

	static fivePlace(lottoNumberList, winningNumberList) {
		return this.getCorrectCount(lottoNumberList, winningNumberList) === lottoNumber.fifthPlaceCount;
	}
	
	static fourthPlace(lottoNumberList, winningNumberList) {
		return this.getCorrectCount(lottoNumberList, winningNumberList) === lottoNumber.fourthPlaceCount;
	}
	
	static thirdPlace(lottoNumberList, winningNumberList, bonusNumber) {
		if (this.getCorrectCount(lottoNumberList, winningNumberList) === lottoNumber.thirdPlaceCount) {
			if (!lottoNumberList.includes(bonusNumber)) {
				return true;
			}
		}
		return false;
	}
}

export default CheckLotto;