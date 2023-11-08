import Lotto from './Lotto.js';
import lottoRanking from './lottoRanking.js';
import { MESSAGES, CONSTANTS } from '../output/Constants.js';
import { Console } from "@woowacourse/mission-utils";

class Customer {
  #payment;

  constructor(payment) {
    this.#payment = payment;
    this.cntLottoTicekts = this.#payment / CONSTANTS.ONE_THOUSAND;
    this.lottoList = [];
  } 

  buyLottoTickets() {
    for (let i = 0; i < this.cntLottoTicekts; i++) {
      this.lottoList.push(new Lotto());
    }

    this.printLottoTickets();
  }

  printLottoTickets() {
    Console.print(`${this.cntLottoTicekts}${MESSAGES.TICKETS_PURCHASED}`);

    this.lottoList.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    })
  }

  calculateProfitRate() {
    return lottoRanking.calculateTotalPrice() / this.#payment * CONSTANTS.PERCENTAGE_FACTOR;
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
