import { Console, Random } from '@woowacourse/mission-utils';

class App {
	async play() {
		const PURCHASE_AMOUNT =
			await Console.readLineAsync('구입금액을 입력해 주세요.');

		if (isNaN(PURCHASE_AMOUNT)) {
			throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
		}

		const PURCHASE_COUNT = Math.floor(Number(PURCHASE_AMOUNT) / 1000);

		const LOTTERY_TICKET_LIST = [];

		for (let i = 0; i < PURCHASE_COUNT; i += 1) {
			const LOTTERY_TICKET = Random.pickUniqueNumbersInRange(1, 45, 6);
			LOTTERY_TICKET.sort((a, b) => a - b);
			LOTTERY_TICKET_LIST.push(LOTTERY_TICKET);
		}

		Console.print(LOTTERY_TICKET_LIST);

		const WINNING_NUMBERS =
			await Console.readLineAsync('당첨 번호를 입력해 주세요.');

		const WINNING_NUMBERS_List = WINNING_NUMBERS.split(',').map((str) =>
			Number(str.trim()),
		);

		if (WINNING_NUMBERS_List.find((element) => element < 0 || element > 45)) {
			throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
		}

		const BONUS_NUMBER_INPUT =
			await Console.readLineAsync('보너스 번호를 입력해 주세요.');

		const BONUS_NUMBER = Number(BONUS_NUMBER_INPUT);

		let match_three = 0;
		let match_four = 0;
		let match_five = 0;
		let match_five_plus_bonus = 0;
		let match_six = 0;

		for (let list of LOTTERY_TICKET_LIST) {
			let count = 0;

			for (let item of list) {
				if (WINNING_NUMBERS.includes(item)) {
					count++;
				}
			}

			if (count === 3) {
				match_three++;
			}
			if (count === 4) {
				match_four++;
			}
			if (count === 5 && !list.includes(BONUS_NUMBER)) {
				match_five++;
			}
			if (count === 5 && list.includes(BONUS_NUMBER)) {
				match_five_plus_bonus++;
			}
			if (count === 6) {
				match_six++;
			}
		}

		Console.print(`3개 일치 (5,000원) - ${match_three}개`);
		Console.print(`4개 일치 (50,000원) - ${match_four}개`);
		Console.print(`5개 일치 (1,500,000원) - ${match_five}개`);
		Console.print(
			`5개 일치, 보너스 볼 일치 (30,000,000원) - ${match_five_plus_bonus}개`,
		);
		Console.print(`6개 일치 (2,000,000,000원) - ${match_six}개`);

		const total =
			5000 * match_three +
			50000 * match_four +
			1500000 * match_five +
			30000000 * match_five_plus_bonus +
			2000000000 * match_six;
		const PROFIT_RATE = (total / Number(PURCHASE_AMOUNT)) * 100;
		Console.print(`총 수익률은 ${PROFIT_RATE.toFixed(1)}%입니다.`);
	}
}

export default App;
