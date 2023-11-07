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
		outputView.printLottoNumbers(
			this.#lottoMaker.getAmount() / INPUT_MESSAGE.LOTTO_UNITS,
			this.#lottoMaker.getLottoNumbers()
		);
		await this.inputNumbers();
	}

	async initializeLotto() {
		while (true) {
			let amount = Number(await inputView.readPurchaseAmount());

			if (validator.purchaseAmountValidator(amount)) {
				this.#lottoMaker = new LottoMaker(amount);
				this.#lottoMaker.makeLotto(this.#lottoMaker.getAmount() / INPUT_MESSAGE.LOTTO_UNITS);
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

			if (validator.matchNumberValidator(matchNumbers.split(','))) {
				this.#lotto = new Lotto(matchNumbers.split(','));
				break;
			}
		}
	}

	async inputBonusNumber() {
		while (true) {
			let bonusNumber = await inputView.readBonusNumber();

			if (validator.bonusNumberValidator(this.#lotto.getNumbers(), bonusNumber)) {
				this.#lotto.setBonusNumber(bonusNumber);
				break;
			}
		}
	}
}

export default LottoController;
