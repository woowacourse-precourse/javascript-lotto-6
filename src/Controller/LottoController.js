import { inputView } from '../View/inputView.js';
import { validator } from '../validators/validator.js';

class LottoController {
	constructor() {}

	async start() {
		this.inputPurchaseAmount();
	}

	async inputPurchaseAmount() {
		while (true) {
			let amount = await inputView.readPurchaseAmount();
			if (validator.purchaseAmountValidator(amount)) {
				break;
			}
		}
	}
}

export default LottoController;
