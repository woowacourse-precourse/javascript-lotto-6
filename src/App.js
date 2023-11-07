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
		return lottoTickets;
	}
	lottoPrinter(tickets, lottoTickets) {
		Console.print(`\n${tickets}개를 구매했습니다.`);
		for (let lottoTicket of lottoTickets) {
			Console.print(`[${lottoTicket.toString().split(',').join(', ')}]`);
		}
	}
	async winningNumber() {
		const input = await Console.readLineAsync(MESSAGE.WINNING);
		const winningNumber = input.split(',').map(Number);
		return winningNumber;
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
			const lotto = new Lotto(winningNumber);
			const bonusNumber = await this.bonusNumber();
			validation.bonusNumber(bonusNumber, winningNumber);
			let ranks = {
				first: 0,
				second: 0,
				third: 0,
				fourth: 0,
				fifth: 0,
			};
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
			Console.print(`\n당첨 통계\n---`);
			Console.print(`3개 일치 (5,000원) - ${ranks.fifth}개`);
			Console.print(`4개 일치 (50,000원) - ${ranks.fourth}개`);
			Console.print(`5개 일치 (1,500,000원) - ${ranks.third}개`);
			Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${ranks.second}개`);
			Console.print(`6개 일치 (2,000,000,000원) - ${ranks.first}개`);
			Console.print(
				`총 수익률은 ${
					(ranks.fifth * 5000 +
						ranks.fourth * 50000 +
						ranks.third * 1500000 +
						ranks.second * 30000000 +
						ranks.first * 2000000000) /
					(1000 * tickets).toFixed(1)
				}%입니다.`
			);
		} catch (error) {
			throw error;
		}
	}
}

export default App;
