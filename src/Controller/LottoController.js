import { INPUT_MESSAGE } from '../constants/messages.js';
import LottoMaker from '../Model/lottoMaker.js';
import { validator } from '../validators/validator.js';
import inputView from '../View/inputView.js';
import outputView from '../View/outputView.js';

class LottoController {
	#lottoMaker;
	#lotto;

	constructor() {}

	async start() {
		await this.initializeLotto();
	}

	async initializeLotto() {
		while (true) {
			let amount = await inputView.readPurchaseAmount(INPUT_MESSAGE.purchaseAmount);

			if (validator.purchaseAmountValidator(amount)) {
				this.#lottoMaker = new LottoMaker(amount);
				this.#lottoMaker.makeLotto(this.#lottoMaker.getAmount() / INPUT_MESSAGE.LOTTO_UNITS);
				break;
			}
		}
		outputView.printLottoNumbers(
			this.#lottoMaker.getAmount() / INPUT_MESSAGE.LOTTO_UNITS,
			this.#lottoMaker.getLottoNumbers()
		);
	}
}

export default LottoController;
