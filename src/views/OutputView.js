import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants.js';

class OutputView {
	static buyTicket(tickets) {
		Console.print(MESSAGE.TICKET(tickets));
	}
	static lottoTicket(lottoTickets) {
		for (let lottoTicket of lottoTickets) {
			Console.print(`[${lottoTicket.toString().split(',').join(', ')}]`);
		}
	}
	static rankResult(rankCount, rate) {
		// Console.print(MESSAGE.RESULT_TITLE);
		Console.print(MESSAGE.RESULT_FIFTH(rankCount.fifth));
		Console.print(MESSAGE.RESULT_FOURTH(rankCount.fourth));
		Console.print(MESSAGE.RESULT_THIRD(rankCount.third));
		Console.print(MESSAGE.RESULT_SECOND(rankCount.second));
		Console.print(MESSAGE.RESULT_FIRST(rankCount.first));
		Console.print(MESSAGE.RESULT_RATE(rate));
	}
}

export default OutputView;
