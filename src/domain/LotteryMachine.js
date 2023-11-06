import { Random } from "@woowacourse/mission-utils";
import { LOTTO_RULE } from "../constants/BusinessNumber.js";

class LotteryMachine {
  #lottoTicket = [];

  #issuanceTime = 0;

  #issuanceLimit = 0;

  constructor(purchaseAmount) {
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
}  

export default LotteryMachine;
