import { InputValue } from './InputValue.js';
import Lotto from './Lotto.js';
import { BuyLotto } from './BuyLotto.js';
import { BonusLotto } from './BonusLotto.js';

class App {
	async play() {
		try {
			const inputValue = new InputValue();
			const win = await inputValue.winningNumber();
			new Lotto(win);
			const bonus = await inputValue.bonusNumber();
			new BonusLotto(bonus, win);
			// new BuyLotto(-100);
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default App;
