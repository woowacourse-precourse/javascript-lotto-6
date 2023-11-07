import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js';
import { validation } from './validation.js';
import Lotto from './Lotto.js';

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
		const lottoTickets = [];
		let numbers = [];
		while (lottoTickets.length < tickets) {
			numbers = this.createNumber();
			this.sortNumber(numbers);
			lottoTickets.push(numbers);
		}
		validation.duplicateLottoNumber(lottoTickets);
		return lottoTickets;
	}
	lottoPrinter(tickets, lottoTickets) {
		Console.print(`\n${tickets}개를 구매했습니다.`);
		for (let lottoTicket of lottoTickets) {
			Console.print(`[${lottoTicket.toString().split(',').join(', ')}]`);
		}
	}
	async winningNumber() {
		const winningNumber = await Console.readLineAsync(MESSAGE.WINNING);
		return winningNumber.split(',').map(Number);
	}
	async bonusNumber() {
		const input = await Console.readLineAsync(MESSAGE.BONUS);
		return Number(input);
	}
	async play() {
		try {
			const tickets = await this.buy();
			const lottoTickets = this.createLotto(tickets);
			this.lottoPrinter(tickets, lottoTickets);
			const winningNumber = await this.winningNumber();
			const bonusNumber = await this.bonusNumber();
			let ranks = {
				first: 0,
				second: 0,
				third: 0,
				fourth: 0,
				fifth: 0,
			};
			const lotto = new Lotto(winningNumber);
			lottoTickets.forEach((lottoTicket) => {
				const rank = lotto.match(lottoTicket);
				if (rank === 3) {
					ranks.fifth += 1;
				}
				if (rank === 4) {
					ranks.fourth += 1;
				}
				if (rank === 5) {
					lottoTicket.includes(bonusNumber) ? (ranks.second += 1) : (ranks.third += 1);
				}
				if (rank === 6) {
					ranks.first += 1;
				}
			});
		} catch (error) {
			throw error;
		}
	}
}

export default App;
