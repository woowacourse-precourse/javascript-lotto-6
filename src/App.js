import { InputValue } from './InputValue.js';
import Lotto from './Lotto.js';
import { BuyLotto } from './BuyLotto.js';
import { BonusLotto } from './BonusLotto.js';
import { PrintValue } from './PrintValue.js';

class App {
	async play() {
		try {
			// const inputValue = new InputValue();
			// const buyLotto = await inputValue.buyLotto();
			// new BuyLotto(buyLotto);
			// const winningNumber = await inputValue.winningNumber();
			// new Lotto(winningNumber);
			// const bonusNumber = await inputValue.bonusNumber();
			// new BonusLotto(bonusNumber, winningNumber);
			const printValue = new PrintValue(2000);
			printValue.test();
		} catch (error) {
			console.log(error.message);
		}
	}
}

export default App;
