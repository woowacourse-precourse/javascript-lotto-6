import { InputValue } from './InputValue.js';
import Lotto from './Lotto.js';

class App {
	async play() {
		try {
			const inputValue = new InputValue();
			const win = await inputValue.winningNumber();
			new Lotto(win);
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default App;
