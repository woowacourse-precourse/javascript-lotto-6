import { InputValue } from './InputValue.js';
import Lotto from './Lotto.js';
import { BuyLotto } from './BuyLotto.js';

class App {
	async play() {
		try {
			// const inputValue = new InputValue();
			// const win = await inputValue.winningNumber();
			new BuyLotto(-100);
			// new Lotto(win);
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default App;
