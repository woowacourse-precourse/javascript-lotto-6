import { Console, Random } from '@woowacourse/mission-utils';
import { ErrorMessage } from './ErrorMessage.js';
import { DECICMAL_NUMBER, WINNING_RULES, LOTTO } from './Constants.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#numbers = numbers;
	}

	#convertPrivateNumbersToNumber() {
		return parseInt(this.#numbers, DECICMAL_NUMBER);
	}

	#lottoCount() {
		return this.#convertPrivateNumbersToNumber() / LOTTO.PRICE;
	}

	validateLottoAmount() {
		const isValidateLottoAmount = Number.isInteger(this.#lottoCount());
		if (!isValidateLottoAmount) {
			throw new Error(ErrorMessage.invalidLottoAmount());
		}
	}

	validateLottoWinningNumbers() {
		if (this.#numbers.split(',').length !== LOTTO.NUMBER_COUNT) {
			throw new Error(ErrorMessage.invalidLottoNumberSeparator);
		}
		const winningNumbersArray = this.#parseWinningNumbers();
		this.#validateWinningNumberCount(winningNumbersArray);
		this.#validateWinningNumberRange(winningNumbersArray);
		this.#validateDuplicateWinningNumbers(winningNumbersArray);
	}

	#parseWinningNumbers() {
		return this.#numbers
			.split(',')
			.map((value) => parseInt(value))
			.sort((a, b) => a - b);
	}

	#validateWinningNumberCount(winningNumbersArray) {
		if (winningNumbersArray.length !== LOTTO.NUMBER_COUNT) {
			throw new Error(ErrorMessage.invalidLottoWinningNumberCount());
		}
	}

	#validateWinningNumberRange(winningNumbersArray) {
		if (
			winningNumbersArray[0] < LOTTO.NUMBER_START ||
			winningNumbersArray.at(-1) > LOTTO.NUMBER_LAST
		) {
			throw new Error(ErrorMessage.invalidLottoWinningNumberRange());
		}
	}

	#validateDuplicateWinningNumbers(winningNumbersArray) {
		if (winningNumbersArray.length !== new Set(winningNumbersArray).size) {
			throw new Error(ErrorMessage.invalidDuplicateWinningNumbers());
		}
	}

	getLottoWinningNumberArray() {
		return this.#numbers
			.split(',')
			.map((number) => parseInt(number, DECICMAL_NUMBER));
	}

	validateLottoBonusNumber(lottoWinningNumberArray) {
		const bonusNumber = this.#convertPrivateNumbersToNumber();
		if (lottoWinningNumberArray.includes(bonusNumber)) {
			throw new Error(ErrorMessage.invalidDuplicateBonusNumber());
		}
	}

	generateLottoTicket() {
		const lottoTicket = Random.pickUniqueNumbersInRange(
			LOTTO.NUMBER_START,
			LOTTO.NUMBER_LAST,
			LOTTO.NUMBER_COUNT
		);
		return lottoTicket.sort((a, b) => a - b);
	}

	generateLottoTicketsArray() {
		const ticketCount = this.#lottoCount();
		const lottoTicketsArray = [];
		while (lottoTicketsArray.length < ticketCount) {
			const ticket = this.generateLottoTicket();
			lottoTicketsArray.push(ticket);
		}
		return lottoTicketsArray;
	}

	getMatchingNumbersArray(lottoWinningNumberArray) {
		return this.#numbers.map((myLottoTicket) => {
			const matchingArray = lottoWinningNumberArray.filter((winningNumber) => {
				return myLottoTicket.includes(winningNumber);
			});
			return matchingArray.length;
		});
	}

	getMatchingBonusNumberArray(bonusNumber) {
		return this.#numbers.map((myLottoTicket) => {
			return myLottoTicket.includes(bonusNumber) ? 1 : 0;
		});
	}

	getTotalPrize(matchingBonusNumberArray) {
		let totalPrizeMoney = 0;
		this.#numbers.forEach((matchingNumber, idx) => {
			const hasBonus = matchingBonusNumberArray[idx] === 1;
			const rule = WINNING_RULES.findLast(
				(rule) => rule.match === matchingNumber && (!rule.bonus || hasBonus)
			);
			if (rule) {
				totalPrizeMoney += rule.prizeNumber;
			}
		});
		return totalPrizeMoney;
	}
}

export default Lotto;
