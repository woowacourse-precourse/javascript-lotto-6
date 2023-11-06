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
	createLotto(tickets) {
		const lottos = [];
		let numbers = [];
		while (lottos.length < tickets) {
			numbers = this.createNumber();
			this.sortNumber(numbers);
			lottos.push(numbers);
		}
		validation.duplicateLottoNumber(lottos);
		return lottos;
	}
	lottoPrinter(tickets, lottos) {
		Console.print(`\n${tickets}개를 구매했습니다.`);
		for (let lotto of lottos) {
			Console.print(`[${lotto.toString().split(',').join(', ')}]`);
		}
	}
	async play() {
		try {
			const tickets = await this.buy();
			const lottos = this.createLotto(tickets);
			this.lottoPrinter(tickets, lottos);
		} catch (error) {
			throw error;
		}
	}
}

export default App;
