import VarificationManager from './VarificationManager.js';

class LottoBonus {
	#bonusNumber;

	constructor(number, lottoNumbers) {
		this.#validate(number, lottoNumbers);
		this.#bonusNumber = number;
	}

	#validate(number, lottoNumbers) {
		VarificationManager.checkBonusLottoNumber(number, lottoNumbers);
	}

	get bonusNumber() {
		return this.#bonusNumber;
	}
}

export default LottoBonus;
