import { Random } from "@woowacourse/mission-utils";
import { REGEX, LOTTO_RULE } from "../constants/BusinessNumber.js";
import { LOTTO_ERROR } from "../constants/Messeage.js";
import CustomError from "../error/CustomError.js";

class LotteryMachine {
  #lottoTicket;

  #issuanceLimit;
  
  constructor(purchaseAmount) {
    this.#validatePurchaseAmount(purchaseAmount);
    this.#issuanceLimit = Number(purchaseAmount) / LOTTO_RULE.buyUnit;
    this.#ticketMaker();
  }

  #ticketMaker() {
    this.#lottoTicket = Array.from({ length : this.#issuanceLimit }, () =>
      Random.pickUniqueNumbersInRange(
        LOTTO_RULE.minNumber,
        LOTTO_RULE.maxNumber,
        LOTTO_RULE.selectTime
      ).sort((a, b) => a - b)
    );
  }

  #validatePurchaseAmount(amountString) {
    if (REGEX.number.test(amountString)) throw new CustomError(LOTTO_ERROR.form);

    if (Number(amountString) > LOTTO_RULE.buyMax) {
      throw new CustomError(LOTTO_ERROR.buyLimit);
    }

    if (Number(amountString) < LOTTO_RULE.buyUnit) {
      throw new CustomError(LOTTO_ERROR.moneyLack);
    }

    if (Number(amountString) % LOTTO_RULE.buyUnit !== 0) {
      throw new CustomError(LOTTO_ERROR.unitBreak);
    }
  }
  
  getTiket() {
    return this.#lottoTicket;
  }
}  

export default LotteryMachine;
