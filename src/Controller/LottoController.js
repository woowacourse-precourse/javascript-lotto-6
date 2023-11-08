import { INPUT_MESSAGE } from '../constants/messages.js';
import LottoMaker from '../Model/lottoMaker.js';
import Lotto from '../Model/Lotto.js';
import Statics from '../Model/Statics.js';
import { validator } from '../validators/validator.js';
import inputView from '../View/inputView.js';
import outputView from '../View/outputView.js';

class LottoController {
	#lottoMaker;
	#lotto;
	#statics;

	constructor() {}

	async start() {
		await this.initializeLotto();

		outputView.printLottoNumbers(this.#lottoMaker.getAmount(), this.#lottoMaker.getLottoNumbers());

		await this.inputNumbers();

		this.getResult();

		outputView.printMatchingStatics(this.#statics.getRateOfReturn());
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
		this.#statics = new Statics(Array.from({ length: this.#lottoMaker.getAmount() }, () => 0));
	}

	numbersMatching() {
		for (let i = 0; i < this.#lottoMaker.getAmount(); i++) {
			this.#statics.compareMatching(i, this.#lottoMaker.getLottoNumbers()[i], this.#lotto.getNumbers());
		}
	}

	bonusNumberMatching() {
		this.#statics.getMatchingStatics().forEach((matchingStatic, index) => {
			if (matchingStatic === INPUT_MESSAGE.BONUS_CHECK_NUMBER) {
				this.#statics.bonusCompareMatching(
					index,
					this.#lottoMaker.getLottoNumbers()[index],
					this.#lotto.getBonusNumber()
				);
			}
		});
	}

	getTotalMatchingStatics() {
		this.#statics.getMatchingStatics().forEach((statics) => {
			this.#statics.countRateOfReturn(statics);
		});
	}
}

export default LottoController;
