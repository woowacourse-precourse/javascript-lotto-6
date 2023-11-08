import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ErrorCheck from './ErrorCheck.js';
import LottoCounter from './LottoCounter.js';
import {
	ENTER_THE_PURCHASE_AMOUNT_MESSAGE,
	HOW_MANY_I_BOUGHT_MESSAGE,
	PLZ_INPUT_WINNING_NUMBER_MESSAGE,
	PLZ_INPUT_BONUS_NUMBER_MESSAGE,
	TOTAL_YEILD_MESSAGE,
	IS_MESSAGE,
} from './constant.js';

class App {
	static LOTTO_PRICE = 1000;

	makeLottoList(number) {
		return Array.from(
			{ length: number },
			() => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)),
		);
	}

	printMyLotto(lottos) {
		lottos.forEach((lotto) =>
			Console.print(`[${lotto.getNumbers().join(', ')}]`),
		);
	}

	async readValidInput(promptMessage, validateFunc) {
		let input;
		do {
			try {
				input = await Console.readLineAsync(promptMessage);
				console.log(typeof input);
				if (validateFunc) {
					validateFunc(input);
				}
				break;
			} catch (error) {
				Console.print(error.message);
			}
		} while (true);
		return input;
	}

	async play() {
		const HOW_MUCH_ARE_YOU_GOING_TO_BUY = await this.readValidInput(
			ENTER_THE_PURCHASE_AMOUNT_MESSAGE,
			ErrorCheck.inputNumberCheck,
		);

		const NUMBER_OF_LOTTERY = Math.floor(
			Number(HOW_MUCH_ARE_YOU_GOING_TO_BUY) / App.LOTTO_PRICE,
		);

		ErrorCheck.purchaseCountCheck(NUMBER_OF_LOTTERY);

		const TOTAL_LOTTO = this.makeLottoList(NUMBER_OF_LOTTERY);

		Console.print(`${NUMBER_OF_LOTTERY}` + HOW_MANY_I_BOUGHT_MESSAGE);

		this.printMyLotto(TOTAL_LOTTO);

		let WINNING_NUMBERS_LIST;
		let isValid;

		while (!isValid) {
			try {
				const WINNING_NUMBERS_INPUT = await Console.readLineAsync(
					PLZ_INPUT_WINNING_NUMBER_MESSAGE,
				);

				const inputList = WINNING_NUMBERS_INPUT.split(',').map((str) =>
					Number(str.trim()),
				);

				for (let item of inputList) {
					ErrorCheck.inputNumberCheck(item);
				}

				WINNING_NUMBERS_LIST = inputList;
				isValid = true;
			} catch (error) {
				Console.print(error.message);
			}
		}

		const WINNING_NUMBERS = new Lotto(WINNING_NUMBERS_LIST);

		const BONUS_NUMBER = Number(
			await this.readValidInput(
				PLZ_INPUT_BONUS_NUMBER_MESSAGE,
				ErrorCheck.inputNumberCheck,
			),
		);

		const lottoCounter = new LottoCounter();

		const countMatchingNumbers = (ticketNumbers, winningNumbers) => {
			return ticketNumbers.filter((number) => winningNumbers.includes(number))
				.length;
		};

		for (let one_lotto of TOTAL_LOTTO) {
			const ticketNumbers = one_lotto.getNumbers();
			const winningNumbers = WINNING_NUMBERS.getNumbers();
			const count = countMatchingNumbers(ticketNumbers, winningNumbers);
			lottoCounter.countMatches(count, ticketNumbers, BONUS_NUMBER);
		}

		lottoCounter.printCountMatches();

		const PROFIT_RATE = lottoCounter.calculatePrize(
			HOW_MUCH_ARE_YOU_GOING_TO_BUY,
		);

		Console.print(
			TOTAL_YEILD_MESSAGE + `${PROFIT_RATE.toFixed(1)}` + IS_MESSAGE,
		);
	}
}

export default App;
