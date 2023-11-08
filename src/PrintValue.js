import { Console } from '@woowacourse/mission-utils';

export class PrintValue {
	winningResult(winningList, roi) {
		this.winningDetail(winningList);
		this.totalReturn(roi);
	}

	lottoIssuedQuantity(lottoQuantity, lottoList) {
		Console.print(`${lottoQuantity}개를 구매했습니다.`);
		lottoList.map((ticket) => Console.print(`[${ticket.join(', ')}]`));
	}

	winningDetail(winningList) {
		Console.print(`당첨 통계\n---`);
		Console.print(`3개 일치 (5,000원) - ${winningList[0]}개`);
		Console.print(`4개 일치 (50,000원) - ${winningList[1]}개`);
		Console.print(`5개 일치 (1,500,000원) - ${winningList[2]}개`);
		Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningList[3]}개`);
		Console.print(`6개 일치 (2,000,000,000원) - ${winningList[4]}개`);
	}

	totalReturn(roi) {
		Console.print(`총 수익률은 ${roi}%입니다.`);
	}
}
