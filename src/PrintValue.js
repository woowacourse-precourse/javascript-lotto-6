import { Console } from '@woowacourse/mission-utils';
import LottoIssuance from './LottoIssuance.js';

export class PrintValue {
	#buyLotto;

	constructor(buyLotto) {
		this.#buyLotto = buyLotto;
		this.lottoQuantity = this.#calcQuantity();
		this.lottoList = LottoIssuance(this.lottoQuantity);
	}

	#calcQuantity() {
		return this.#buyLotto / 1000;
	}

	test() {
		console.log(this.lottoQuantity);
		console.log(this.#buyLotto);
		this.lottoIssuedQuantity();
		// console.log(this.lottoList);
	}

	lottoIssuedQuantity() {
		Console.print(`${this.lottoQuantity}개를 구매했습니다.`);
		this.lottoList.map((ticket) => Console.print(ticket));
	}
}
