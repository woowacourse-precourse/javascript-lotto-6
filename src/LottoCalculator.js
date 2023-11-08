export class LottoCalculator {
	constructor(lottoTickets, winningNumbers, bonusNumber) {
		this.lottoTickets = lottoTickets;
		this.winningNumbers = winningNumbers;
		this.bonusNumber = bonusNumber;
		this.ranks = {
			first: 0,
			second: 0,
			third: 0,
			fourth: 0,
			fifth: 0,
		};
		this.count();
	}
	count() {
		this.lottoTickets.forEach((lottoTicket) => {
			const rank = this.match(lottoTicket);
			if (rank === 3) {
				this.ranks.fifth += 1;
			}
			if (rank === 4) {
				this.ranks.fourth += 1;
			}
			if (rank === 5) {
				lottoTicket.includes(this.bonusNumber) ? (this.ranks.second += 1) : (this.ranks.third += 1);
			}
			if (rank === 6) {
				this.ranks.first += 1;
			}
		});
		return this.ranks;
	}
	match(lottoTicket) {
		return this.winningNumbers.filter((number) => lottoTicket.includes(number)).length;
	}
}
