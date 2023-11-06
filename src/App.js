import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';
import { validation } from './validation.js';

class App {
	async buy() {
		const price = await Console.readLineAsync(MESSAGE.PRICE);
		validation.buy(Number(price));
		return Number(price) / 1000;
	}
	createNumber() {
		const numbers = [];
		while (numbers.length < 6) {
			const number = MissionUtils.Random.pickNumberInRange(1, 45);
			!numbers.includes(number) ? numbers.push(number) : '';
		}
		return numbers;
	}
	sortNumber(numbers) {
		numbers.sort(function (a, b) {
			return a - b;
		});
	}
	lottoPrinter(tickets) {
		const lottos = [];
		let numbers = [];
		while (lottos.length < tickets) {
			numbers = this.createNumber();
			this.sortNumber(numbers);
			lottos.push(numbers);
		}
		return lottos;
	}
	createLotto(tickets) {
		const lottos = this.lottoPrinter(tickets);
	}
	async play() {
		try {
			const tickets = await this.buy();
			this.createLotto(tickets);
		} catch (error) {
			throw error;
		}
	}
}

export default App;
