import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';
import { validation } from './validation.js';

class App {
	async buy() {
		const price = await Console.readLineAsync(MESSAGE.PRICE);
		validation.buy(price);
		return Number(price) / 1000;
	}
	async play() {
		try {
			const tickets = await this.buy();
		} catch (error) {
			throw error;
		}
	}
}

export default App;
