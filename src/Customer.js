import Lotto from './Lotto.js';
import { Console } from "@woowacourse/mission-utils";

class Customer {
  #payment;

  constructor(payment) {
    this.#payment = payment;
    this.cntLottoTicekts = this.#payment / 1000;
    this.lottoList = [];
  } 

  buyLottoTickets() {
    for (let i = 0; i < this.cntLottoTicekts; i++) {
      this.lottoList.push(new Lotto());
    }

    this.printLottoTickets();
  }

  printLottoTickets() {
    Console.print(`${this.cntLottoTicekts}개를 구매했습니다.`);
    this.lottoList.forEach((lotto) => {
      Console.print(`${lotto.getNumbers()}`);
    })
  }

}

export default Customer;
