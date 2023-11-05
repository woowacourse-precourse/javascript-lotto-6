import { Console } from '@woowacourse/mission-utils';
import LottoIssuance from './LottoIssuance.js';

export class PrintValue {
	#lottoQuantity;
	#lottoList;

	constructor(lottoQuantity, lottoList) {
		this.#lottoQuantity = lottoQuantity;
		this.#lottoList = lottoList;
	}

	test() {
		// console.log(this.#LOTTO_QUANTITY);
		this.lottoIssuedQuantity();
		// console.log(this.lottoList);
		this.winningDetail();
	}

	lottoIssuedQuantity() {
		Console.print(`${this.#lottoQuantity}개를 구매했습니다.`);
		this.#lottoList.map((ticket) => Console.print(ticket));
	}

	winningDetail() {
		Console.print('당첨 통계\n ---');
	}
}
