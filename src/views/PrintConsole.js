import { Console } from '@woowacourse/mission-utils';
import SYSTEM_MESSAGES from '../constants/SystemMessages.js';
import LOTTO_SYSTEM from '../constants/LottoSystem.js';

class PrintConsole {
	#showLottoResults(lottoResult) {
		LOTTO_SYSTEM.winning_array.forEach((winning, idx) => {
			const winningCount = winning.count;
			const prize = LOTTO_SYSTEM.prize_array[idx].toLocaleString();
			const userWinningCount = lottoResult.filter((result) => result === idx).length;

			if (winning.hasBonus) {
				this.print(
					SYSTEM_MESSAGES.number_of_match_bonusball(winningCount, prize, userWinningCount)
				);
				return;
			}

			this.print(SYSTEM_MESSAGES.number_of_match(winningCount, prize, userWinningCount));
		});
	}

	showWinningStatistics(lottoResult, totalReturn) {
		this.print(SYSTEM_MESSAGES.winning_statistics);
		this.#showLottoResults(lottoResult);
		this.print(SYSTEM_MESSAGES.rate_of_return(totalReturn));
	}

	showLottoNumbers(numbers) {
		this.print(SYSTEM_MESSAGES.number_of_purchase(numbers.length));
		numbers.forEach((number) => {
			const numberToStr = '[' + number.join(', ') + ']';
			this.print(numberToStr);
		});
	}

	print(message) {
		Console.print(message);
	}
}

export default PrintConsole;
