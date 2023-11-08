import Lotto from './Lotto.js';
import lottoRanking from './lottoRanking.js';
import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, CONSTANT } from '../output/constants.js';

class Customer {
  #payment;
  #cntLottoTickets;

  constructor(payment) {
    this.#payment = payment;
    this.#cntLottoTickets = this.#payment / CONSTANT.ONE_THOUSAND;
    this.lottoList = [];
  } 

  buyLottoTickets() {
    for (let i = 0; i < this.#cntLottoTickets; i++) {
      this.lottoList.push(new Lotto());
    }

    this.printLottoTickets();
  }

  printLottoTickets() {
    Console.print(`${this.#cntLottoTickets}${MESSAGES.TICKETS_PURCHASED}`);

    this.lottoList.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    })
  }

  calculateProfitRate() {
    return lottoRanking.calculateTotalPrice() / this.#payment * CONSTANT.PERCENTAGE_FACTOR;
  }

  printResult(profitRate) {
    Console.print(`${MESSAGES.RESULT}`);
    Console.print(`  
    3개 일치 (5,000원) - ${lottoRanking.FIFTH.count}개
    4개 일치 (50,000원) - ${lottoRanking.FOURTH.count}개
    5개 일치 (1,500,000원) - ${lottoRanking.THIRD.count}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoRanking.SECOND.count}개
    6개 일치 (2,000,000,000원) - ${lottoRanking.FIRST.count}개
    총 수익률은 ${profitRate}%입니다.`);
  }
    
  lottoResult(winnigNumbers, bonusNumber) {
    this.lottoList.forEach((lotto) => {
      lotto.checkLottoRank(winnigNumbers, bonusNumber)
    })

    const profitRate = this.calculateProfitRate();

    this.printResult(profitRate);
  }
}

export default Customer;
