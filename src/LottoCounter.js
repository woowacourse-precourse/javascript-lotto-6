import { Console } from '@woowacourse/mission-utils';
class LottoCounter {
	constructor() {
		this.match_three = 0;
		this.match_four = 0;
		this.match_five = 0;
		this.match_five_plus_bonus = 0;
		this.match_six = 0;
	}

	countMatches(count, ticket, bonusNumber) {
		if (count === 3) this.match_three++;
		if (count === 4) this.match_four++;
		if (count === 5 && !ticket.includes(bonusNumber)) this.match_five++;
		if (count === 5 && ticket.includes(bonusNumber))
			this.match_five_plus_bonus++;
		if (count === 6) this.match_six++;
	}

	printCountMatches() {
		Console.print(`3개 일치 (5,000원) - ${this.match_three}개`);
		Console.print(`4개 일치 (50,000원) - ${this.match_four}개`);
		Console.print(`5개 일치 (1,500,000원) - ${this.match_five}개`);
		Console.print(
			`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.match_five_plus_bonus}개`,
		);
		Console.print(`6개 일치 (2,000,000,000원) - ${this.match_six}개`);
	}

	calculatePrize(number) {
		const total =
			5000 * this.match_three +
			50000 * this.match_four +
			1500000 * this.match_five +
			30000000 * this.match_five_plus_bonus +
			2000000000 * this.match_six;
		const PROFIT_RATE = (total / Number(number)) * 100;

		return PROFIT_RATE;
	}
}

export default LottoCounter;
