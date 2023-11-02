import { Random } from "@woowacourse/mission-utils";

class LotteryMachine {
  #lottoTicket = [];

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#ticketMaker(purchaseAmount);
  }

  getTiket() {
    return this.#lottoTicket;
  }

  #ticketMaker(purchaseAmount) {
    const lotteryNumber = purchaseAmount / 1000;
                
    for(let lottery = 0; lottery < lotteryNumber; lottery++) {
      let temp = this.#ascendingOrder((Random.pickUniqueNumbersInRange(1, 45, 6)));
      this.#lottoTicket.push(temp);
    }
  }

  #ascendingOrder(array) {
    return array.sort((a, b) => a- b);
  }

  #validate(purchaseAmount) {
    const amountNumber = Number(purchaseAmount);

    if(Number.isNaN(amountNumber)) {
      throw new Error("숫자가 아님")
    }

    const remainder = Number(purchaseAmount) % 1000;
    
    if (remainder !== 0) {
      throw new Error("거스름돈없어여")
    }

    if ( amountNumber >= 100000) {
      throw new Error("10만원이하만구매가능")
    }
  }  
}

const a = new LotteryMachine("30000");
console.log(a.getTiket());