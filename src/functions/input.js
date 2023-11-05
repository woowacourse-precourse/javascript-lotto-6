import { Console } from '@woowacourse/mission-utils';
import Validation from '../utills/validation';

class Input {
	async purchaseAmountInput() {
		const purchaseAmount = await Console.readLineAsync();
		const isThousand = Validation.purchaseAmountInputValidation(purchaseAmount);
	}
}

export default Input;