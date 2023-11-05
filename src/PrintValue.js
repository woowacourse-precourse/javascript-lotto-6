import { Console } from '@woowacourse/mission-utils';
import LottoIssuance from './LottoIssuance.js';

export class PrintValue {
	#lottoQuantity;
	#lottoList;
	#winningList;
	#roi;

	constructor(lottoQuantity, lottoList, winningList, roi) {
		this.#lottoQuantity = lottoQuantity;
		this.#lottoList = lottoList;
		this.#winningList = winningList;
		this.#roi = roi;
	}

	test() {
		// console.log(this.#LOTTO_QUANTITY);
		this.lottoIssuedQuantity();
		// console.log(this.lottoList);
		this.winningDetail(this.#winningList);
		this.totalReturn();
	}

	lottoIssuedQuantity() {
		Console.print(`${this.#lottoQuantity}개를 구매했습니다.`);
		this.#lottoList.map((ticket) => Console.print(ticket));
	}

	winningDetail(winningList) {
		Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${winningList[0]}개
4개 일치 (50,000원) -  ${winningList[1]}개
5개 일치 (1,500,000원) -  ${winningList[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) -  ${winningList[3]}개
6개 일치 (2,000,000,000원) -  ${winningList[4]}개
    `);
	}

	totalReturn() {
		Console.print(`총 수익률은 ${this.#roi}%입니다.`);
	}
}
