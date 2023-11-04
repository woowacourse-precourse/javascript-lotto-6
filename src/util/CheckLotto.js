import lottoNumber from '../constants/lottoNumber.js';

class CheckLotto {
	static getCorrectCount(lottoNumberArray, winningNumberArray) {
		return lottoNumberArray.reduce((count, lottoNumber) => {
			if (winningNumberArray.includes(lottoNumber)) {
				return count + 1;
			}
			return count;
		}, 0);
	}

	static fifthPlace(lottoNumberArray, winningNumberArray) {
		return this.getCorrectCount(lottoNumberArray, winningNumberArray) === lottoNumber.fifthPlaceCount;
	}

	static fourthPlace(lottoNumberArray, winningNumberArray) {
		return this.getCorrectCount(lottoNumberArray, winningNumberArray) === lottoNumber.fourthPlaceCount;
	}

	static thirdPlace(lottoNumberArray, winningNumberArray, bonusNumber) {
		if (this.getCorrectCount(lottoNumberArray, winningNumberArray) === lottoNumber.thirdPlaceCount) {
			if (!lottoNumberArray.includes(bonusNumber)) {
				return true;
			}
		}
		return false;
	}

	static secondPlace(lottoNumberArray, winningNumberArray, bonusNumber) {
		if (this.getCorrectCount(lottoNumberArray, winningNumberArray) === lottoNumber.secondPlaceCount) {
			if (lottoNumberArray.includes(bonusNumber)) {
				return true;
			}
		}
		return false;
	}

	static firstPlace(lottoNumberArray, winningNumberArray) {
		return this.getCorrectCount(lottoNumberArray, winningNumberArray) === lottoNumber.firstPlaceCount;
	}

	static calculateRateOfReturn(purchaseAmount, lottoResult) {
		let totalEarning = 0;
		totalEarning += lottoResult.firstPlaceCount * lottoNumber.firstPlacePrice;
		totalEarning += lottoResult.secondPlaceCount * lottoNumber.secondPlacePrice;
		totalEarning += lottoResult.thirdPlaceCount * lottoNumber.thirdPlacePrice;
		totalEarning += lottoResult.fourthPlaceCount * lottoNumber.fourthPlacePrice;
		totalEarning += lottoResult.fifthPlaceCount * lottoNumber.fifthPlacePrice;
		return ((totalEarning / purchaseAmount) * 100).toFixed(1);
	}
}

export default CheckLotto;