import { Console } from '@woowacourse/mission-utils';
import SYSTEM_MESSAGES from '../constants/SystemMessages.js';
import LOTTO_SYSTEM from '../constants/LottoSystem.js';

class PrintConsole {
	showWinningStatistics(lottoResult, totalReturn) {
		this.print(SYSTEM_MESSAGES.winning_statistics);

		LOTTO_SYSTEM.winning_array.forEach((winning, idx) => {
			const winningCount = winning.count;
			const prize = LOTTO_SYSTEM.prize_array[idx];
			const userWinningCount = lottoResult.filter((result) => result === idx).length;

			if (winning.hasBonus)
				this.print(
					SYSTEM_MESSAGES.number_of_match(winningCount, prize.toLocaleString(), userWinningCount)
				);
			else
				this.print(
					SYSTEM_MESSAGES.number_of_match_bonusball(
						winningCount,
						prize.toLocaleString(),
						userWinningCount
					)
				);
		});

		this.print(SYSTEM_MESSAGES.rate_of_return(totalReturn));
	}

	showLottoNumbers(numbers) {
		this.print(SYSTEM_MESSAGES.number_of_purchase(numbers.length));
		numbers.forEach((number) => this.print(number));
	}

	print(message) {
		Console.print(message);
	}
}

export default PrintConsole;
