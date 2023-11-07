import { Console } from '@woowacourse/mission-utils';

export class View {
	async getLottoPerchaseAmount() {
		return await Console.readLineAsync('구입금액을 입력해 주세요.');
	}
	printLottoTickets(lottoTicketMessage) {
		Console.print(lottoTicketMessage);
	}

	async getLottoWinningNumbers() {
		return await Console.readLineAsync('당첨 번호를 입력해 주세요.');
	}

	async getBonusLottoNumber() {
		return await Console.readLineAsync('보너스 번호를 입력해 주세요.');
	}

	printWinningStatistics(winningStatistics) {
		Console.print(`당첨 통계\n---\n${winningStatistics}`);
	}

	printRateOfReturn(rateOfReturn) {
		Console.print(`총 수익률은 ${rateOfReturn}입니다.`);
	}
}
