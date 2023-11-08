import { Console } from '@woowacourse/mission-utils';
import {
	THREE_MATCH_MESSAGE,
	FOUR_MATCH_MESSAGE,
	FIVE_MATCH_MESSAGE,
	FIVE_PLUS_BONUS_MATCH_MESSAGE,
	SIX_MATCH_MESSAGE,
} from './Constant.js';

const match_three_prize = 5000;
const match_four_prize = 50000;
const match_5_prize = 1500000;
const second_prize = 30000000;
const first_prize = 2000000000;

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
		Console.print(THREE_MATCH_MESSAGE + `${this.match_three}개`);
		Console.print(FOUR_MATCH_MESSAGE + `${this.match_four}개`);
		Console.print(FIVE_MATCH_MESSAGE + `${this.match_five}개`);
		Console.print(
			FIVE_PLUS_BONUS_MATCH_MESSAGE + `${this.match_five_plus_bonus}개`,
		);
		Console.print(SIX_MATCH_MESSAGE + `${this.match_six}개`);
	}

	calculatePrize(number) {
		const total =
			match_three_prize * this.match_three +
			match_four_prize * this.match_four +
			match_5_prize * this.match_five +
			second_prize * this.match_five_plus_bonus +
			first_prize * this.match_six;

		const PROFIT_RATE = (total / Number(number)) * 100;

		return PROFIT_RATE;
	}
}

export default LottoCounter;
