import lottoNumber from '../constants/lottoNumber.js';

class CheckLotto {
	static fivePlace(lottoNumberList, winningNumberList) {
		const correctCount = lottoNumberList.reduce((count, lottoNumber) => {
			if (winningNumberList.includes(lottoNumber)) {
				return count + 1;
			}
			return count;
		}, 0);

		return correctCount === lottoNumber.fifthPlaceCount;
	}
}

export default CheckLotto;