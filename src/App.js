import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ErrorCheck from './ErrorCheck.js';
import LottoCounter from './LottoCounter.js';
class App {
	makeLottoList(number) {
		const LOTTERY_TICKET_LIST = [];

		for (let i = 0; i < number; i += 1) {
			const LOTTERY_TICKET = new Lotto(
				Random.pickUniqueNumbersInRange(1, 45, 6),
			);
			LOTTERY_TICKET_LIST.push(LOTTERY_TICKET);
		}
		return LOTTERY_TICKET_LIST;
	}

	printMyLotto(array) {
		for (let item of array) {
			Console.print(`[${item.getNumbers().join(', ')}]`);
		}
	}

	async play() {
		const PURCHASE_AMOUNT =
			await Console.readLineAsync('구입금액을 입력해 주세요.');

		ErrorCheck.inputNumberCheck(PURCHASE_AMOUNT);

		const PURCHASE_COUNT = Math.floor(Number(PURCHASE_AMOUNT) / 1000);

		ErrorCheck.purchaseCountCheck(PURCHASE_COUNT);

		const LOTTERY_TICKET_LIST = this.makeLottoList(PURCHASE_COUNT);

		Console.print(`${PURCHASE_COUNT}개를 구매했습니다.`);

		this.printMyLotto(LOTTERY_TICKET_LIST);

		const WINNING_NUMBERS_INPUT =
			await Console.readLineAsync('당첨 번호를 입력해 주세요.');

		const WINNING_NUMBERS_LIST = WINNING_NUMBERS_INPUT.split(',').map((str) =>
			Number(str.trim()),
		);

		for (let item of WINNING_NUMBERS_LIST) {
			ErrorCheck.inputNumberCheck(item);
		}

		const WINNING_NUMBERS = new Lotto(WINNING_NUMBERS_LIST);

		const BONUS_NUMBER = Number(
			await Console.readLineAsync('보너스 번호를 입력해 주세요.'),
		);

		ErrorCheck.inputNumberCheck(BONUS_NUMBER);

		const lottoCounter = new LottoCounter();

		const countMatchingNumbers = (ticketNumbers, winningNumbers) => {
			return ticketNumbers.filter((number) => winningNumbers.includes(number))
				.length;
		};

		for (let ticket of LOTTERY_TICKET_LIST) {
			const ticketNumbers = ticket.getNumbers();
			const winningNumbers = WINNING_NUMBERS.getNumbers();
			const count = countMatchingNumbers(ticketNumbers, winningNumbers);
			lottoCounter.countMatches(count, ticketNumbers, BONUS_NUMBER);
		}

		lottoCounter.printCountMatches();

		const PROFIT_RATE = lottoCounter.calculatePrize(PURCHASE_AMOUNT);
		Console.print(`총 수익률은 ${PROFIT_RATE.toFixed(1)}%입니다.`);
	}
}

export default App;
