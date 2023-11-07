import { View } from './LottoView.js';
import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { DECICMAL_NUMBER, WINNING_RULES } from './Constants.js';

class App {
	constructor() {
		this.view = new View();
	}
	async play() {
		try {
			const lottoAmount = await this.validateLottoAmount();

			const myLottoTicketsArray = this.getMyLottoTickets(lottoAmount);

			this.view.printLottoTickets(myLottoTicketsArray);

			const lottoWinningNumberArray = await this.validateLottoWinningNumbers();

			const bonusNumber = await this.validateLottoBonusNumber(
				lottoWinningNumberArray
			);

			const matchingNumbersArray = this.getMatchingNumbersArray(
				myLottoTicketsArray,
				lottoWinningNumberArray
			);

			const matchingBonusNumberArray = this.getMatchingBonusNumberArray(
				myLottoTicketsArray,
				bonusNumber
			);

			const winningStatisticsMessage = this.getWinningStatistics(
				matchingNumbersArray,
				matchingBonusNumberArray
			);

			this.view.printWinningStatistics(winningStatisticsMessage);

			const totalPrize = this.getTotalPrize(
				matchingNumbersArray,
				matchingBonusNumberArray
			);

			Console.print(totalPrize);
		} catch (error) {
			throw error;
		}
	}

	async validateLottoAmount() {
		while (true) {
			try {
				const lottoAmount = await this.view.getLottoPerchaseAmount();
				const model = new Lotto(lottoAmount);
				model.validateLottoAmount();

				return parseInt(lottoAmount, DECICMAL_NUMBER);
			} catch (error) {
				console.error(error);
			}
		}
	}

	async validateLottoWinningNumbers() {
		while (true) {
			try {
				const lottoWinningNumbers = await this.view.getLottoWinningNumbers();
				const model = new Lotto(lottoWinningNumbers);
				model.validateLottoWinningNumbers();
				const lottoWinningNumberArray =
					this.getLottoWinningNumberArray(lottoWinningNumbers);

				return lottoWinningNumberArray;
			} catch (error) {
				console.error(error);
			}
		}
	}

	async validateLottoBonusNumber(lottoWinningNumberArray) {
		while (true) {
			try {
				const lottoBonusNumber = await this.view.getBonusLottoNumber();
				const model = new Lotto(lottoBonusNumber);
				model.validateLottoBonusNumber(lottoWinningNumberArray);

				return parseInt(lottoBonusNumber, DECICMAL_NUMBER);
			} catch (error) {
				console.error(error);
			}
		}
	}

	getMyLottoTickets(numbers) {
		const model = new Lotto(numbers);
		return model.generateLottoTicketsArray();
	}

	getLottoWinningNumberArray(lottoWinningNumbers) {
		const model = new Lotto(lottoWinningNumbers);
		return model.getLottoWinningNumberArray();
	}

	getMatchingNumbersArray(myLottoTicketsArray, lottoWinningNumberArray) {
		const model = new Lotto(myLottoTicketsArray);
		return model.getMatchingNumbersArray(lottoWinningNumberArray);
	}

	getMatchingBonusNumberArray(myLottoTicketsArray, bonusNumber) {
		const model = new Lotto(myLottoTicketsArray);
		return model.getMatchingBonusNumberArray(bonusNumber);
	}

	getTotalPrize(matchingNumbersArray, matchingBonusNumberArray) {
		const model = new Lotto(matchingNumbersArray);
		return model.getTotalPrize(matchingBonusNumberArray);
	}

	getWinningStatistics(matchingNumbersArray, matchingBonusNumberArray) {
		return WINNING_RULES.map((rule) => {
			let count = matchingNumbersArray.reduce((acc, cur, i) => {
				if (rule.bonus) {
					return (
						acc +
						(cur === rule.match && matchingBonusNumberArray[i] === 1 ? 1 : 0)
					);
				} else {
					return (
						acc +
						(cur === rule.match && matchingBonusNumberArray[i] === 0 ? 1 : 0)
					);
				}
			}, 0);
			return `${rule.match}개 일치${rule.bonusText || ''} (${
				rule.prize
			}) - ${count}개`;
		}).join('\n');
	}
}

export default App;
