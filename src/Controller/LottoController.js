import { INPUT_MESSAGE } from '../constants/messages.js';
import LottoMaker from '../Model/lottoMaker.js';
import Lotto from '../Model/Lotto.js';
import { validator } from '../validators/validator.js';
import inputView from '../View/inputView.js';
import outputView from '../View/outputView.js';

class LottoController {
	#lottoMaker;
	#lotto;

	constructor() {}

	async start() {
		await this.initializeLotto();

		outputView.printLottoNumbers(this.#lottoMaker.getAmount(), this.#lottoMaker.getLottoNumbers());

		await this.inputNumbers();

		this.getResult();

		outputView.printMatchingStatics(this.#lotto.getRateOfReturn());
	}

	async initializeLotto() {
		while (true) {
			let amount = Number(await inputView.readPurchaseAmount());

			if (validator.purchaseAmountValidator(amount)) {
				this.#lottoMaker = new LottoMaker(amount / INPUT_MESSAGE.LOTTO_UNITS);
				this.#lottoMaker.makeLotto(this.#lottoMaker.getAmount());
				break;
			}
		}
	}

	async inputNumbers() {
		await this.inputMatchNumbers();
		await this.inputBonusNumber();
	}

	async inputMatchNumbers() {
		while (true) {
			let matchNumbers = await inputView.readMatchNumbers();
			const convertMatchNumbers = matchNumbers.split(',').map(Number);

			if (validator.matchNumberValidator(convertMatchNumbers)) {
				this.#lotto = new Lotto(convertMatchNumbers);
				break;
			}
		}
	}

	async inputBonusNumber() {
		while (true) {
			let bonusNumber = await inputView.readBonusNumber();

			if (validator.bonusNumberValidator(this.#lotto.getNumbers(), Number(bonusNumber))) {
				this.#lotto.setBonusNumber(Number(bonusNumber));
				break;
			}
		}
	}

	getResult() {
		this.initializeStatics();
		this.numbersMatching();
		this.bonusNumberMatching();
		this.getTotalMatchingStatics();
	}

	initializeStatics() {
		this.#lotto.setMatchingStatics(Array.from({ length: this.#lottoMaker.getAmount() }, () => 0));
	}

	numbersMatching() {
		for (let i = 0; i < this.#lottoMaker.getAmount(); i++) {
			this.#lotto.compareMatching(i, this.#lottoMaker.getLottoNumbers()[i]);
		}
	}

	bonusNumberMatching() {
		this.#lotto.getMatchingStatics().forEach((matchingStatic, index) => {
			if (matchingStatic === INPUT_MESSAGE.BONUS_CHECK_NUMBER) {
				this.#lotto.bonusCompareMatching(index, this.#lottoMaker.getLottoNumbers()[index]);
			}
		});
	}

	getTotalMatchingStatics() {
		this.#lotto.getMatchingStatics().forEach((statics) => {
			this.#lotto.countRateOfReturn(statics);
		});
	}
}

export default LottoController;
