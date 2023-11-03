import { Random } from "@woowacourse/mission-utils";
import { LOTTO_RULE } from "../constants/BusinessNumber.js";

class LotteryMachine {
  #lottoTicket = [];

  #issuanceTime = 0;

  #issuanceLimit = 0;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#issuanceLimit = purchaseAmount / LOTTO_RULE.buyUnit;
    this.#ticketMaker()
  }

  #ticketMaker() {
    const lottoArray = Random.pickUniqueNumbersInRange(
      LOTTO_RULE.minNumber,
      LOTTO_RULE.maxNumber,
      LOTTO_RULE.selectTime
    );
    this.#lottoTicket.push(this.#ascendingOrder(lottoArray));
    this.#issuanceTime += 1;

    if (this.#issuanceTime === this.#issuanceLimit) return;

    this.#ticketMaker();
  }

  #ascendingOrder(lottoArray) {
    return lottoArray.sort((frontLotto, backLotto) => frontLotto - backLotto);
  }

  getTiket() {
    return this.#lottoTicket;
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

export default LotteryMachine;
/*
const a = new LotteryMachine(7000);
console.log(a.getTiket());*/
