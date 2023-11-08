import { LOTTO } from './constants.js';
import { LottoCalculator } from './LottoCalculator.js';
import { numberUtils } from './utils/NumberUtils.js';
import { validation } from './validation.js';
import Lotto from './Lotto.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

export class LottoMaker {
	constructor() {
		this.lottoTickets = [];
		this.winningNumbers = [];
		this.bonusNumber = 0;
	}

	async buy() {
		const payment = Number(await InputView.getPayment());
		const passCheck = validation.buy(payment);
		if (!passCheck) {
			return this.buy();
		}
		return payment;
	}
	getLottoTickets(payment) {
		const tickets = payment / LOTTO.PRICE;
		return tickets;
	}
	createLotto(tickets) {
		let numbers = [];
		while (this.lottoTickets.length < tickets) {
			numbers = numberUtils.numberGenerator();
			const lotto = new Lotto(numbers);
			this.lottoTickets.push(numbers);
		}
	}
	lottoPrinter(tickets, lottoTickets) {
		OutputView.buyTicket(tickets);
		OutputView.lottoTicket(lottoTickets);
	}
	async getWinningNumber() {
		const numbers = await InputView.getWinningNumber();
		const winningNumbers = numbers.split(',').map(Number);
		const passCheck = validation.winningNumber(winningNumbers);
		if (!passCheck) {
			return this.getWinningNumber();
		}
		this.winningNumbers = winningNumbers;
	}
	async getBonusNumber(winningNumber) {
		const bonusNumber = Number(await InputView.getBonusNumber());
		const passCheck = validation.bonusNumber(bonusNumber, winningNumber);
		if (!passCheck) {
			return this.getBonusNumber(winningNumber);
		}
		this.bonusNumber = bonusNumber;
	}
	resultCalculation(ranks, payment) {
		const rate = parseFloat(
			(ranks.fifth * 5000 +
				ranks.fourth * 50000 +
				ranks.third * 1500000 +
				ranks.second * 30000000 +
				ranks.first * 2000000000) /
				(payment / 100)
		).toFixed(1);
		return rate;
	}

	async play() {
		const payment = await this.buy();
		const tickets = this.getLottoTickets(payment);
		this.createLotto(tickets);
		this.lottoPrinter(tickets, this.lottoTickets);
		await this.getWinningNumber();
		await this.getBonusNumber(this.winningNumbers);

		const { ranks } = new LottoCalculator(this.lottoTickets, this.winningNumbers, this.bonusNumber);
		const rate = this.resultCalculation(ranks, payment);
		OutputView.rankResult(ranks, rate);
	}
}
