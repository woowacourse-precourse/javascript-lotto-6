import { INPUT_MESSAGE, MATCHING_RANK } from '../constants/messages.js';
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

		outputView.printMatchingStatics(this.#statics.getProceed());

		outputView.printRateOfReturn(this.calculateRateOfReturn().toFixed(1));
	}

	async initializeLotto() {
		try {
			this.#lottoMaker = new LottoMaker(Number((await inputView.readPurchaseAmount()) / INPUT_MESSAGE.LOTTO_UNITS));
			this.#lottoMaker.makeLotto(this.#lottoMaker.getAmount());
		} catch {
			await this.initializeLotto();
		}
	}

	async inputNumbers() {
		await this.inputMatchNumbers();
		await this.inputBonusNumber();
	}

	async inputMatchNumbers() {
		let matchNumbers = await inputView.readMatchNumbers();
		const convertMatchNumbers = matchNumbers.split(',').map(Number);
		this.#lotto = new Lotto(convertMatchNumbers);
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
		this.addProceed();
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
			this.#statics.countProceed(statics);
		});
	}

	addProceed() {
		for (let i = 0; i < 5; i++) {
			this.#statics.setTotalProceed(
				this.#statics.getProceed().get(MATCHING_RANK[5 - i].matchingCount) * MATCHING_RANK[5 - i].proceed
			);
		}
	}

	calculateRateOfReturn() {
		return (this.#statics.getTotalProceed() / (this.#lottoMaker.getAmount() * 1000)) * 100;
	}
}

export default LottoController;
