import { Random } from "@woowacourse/mission-utils";
import { LOTTO_RULE } from "../constants/BusinessNumber.js";

class LotteryMachine {
  #lottoTicket;

  #issuanceLimit;

  constructor(purchaseAmount) {
    this.#issuanceLimit = purchaseAmount / LOTTO_RULE.buyUnit;
    this.#ticketMaker();
  }

  #ticketMaker() {
    this.#lottoTicket = Array.from({ length : this.#issuanceLimit }, () => 
    this.#ascendingOrder(Random.pickUniqueNumbersInRange(
      LOTTO_RULE.minNumber,
      LOTTO_RULE.maxNumber,
      LOTTO_RULE.selectTime
    )));
  }
  
  #ascendingOrder(lottoArray) {
    return lottoArray.sort((a, b) => a - b);
  }
  
  getTiket() {
    return this.#lottoTicket;
  }
}  

export default LotteryMachine;
