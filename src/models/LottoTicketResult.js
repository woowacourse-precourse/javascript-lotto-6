import { LOTTO } from '../utils/constants.js';

class LottoTicketResult {
  #lottoTicketResult;

  constructor(lottoTicket, winningNumber, bonusNumber) {
    this.#lottoTicketResult = [0, 0, 0, 0, 0]; //순서대로 5등 4등 3등 2등 1등
    this.#checkLottoTicketResult(lottoTicket, winningNumber, bonusNumber);
  }

  #checkLottoTicketResult(lottoTicket, winningNumber, bonusNumber) {
    lottoTicket.forEach((lotto) => {
      let matchNumberCount = 0;
      lotto.forEach((lottoNumber) => {
        if (winningNumber.includes(lottoNumber)) {
          matchNumberCount += 1;
        }
      });
      if (matchNumberCount === LOTTO.FIFTH_PLACE_MATCH) {
        this.#lottoTicketResult[0] += 1;
      }
      if (matchNumberCount === LOTTO.FOURTH_PLACE_MATCH) {
        this.#lottoTicketResult[1] += 1;
      }
      if (matchNumberCount === LOTTO.SECOND_OR_THIRD_PLACE_MATCH) {
        lotto.includes(bonusNumber)
          ? (this.#lottoTicketResult[3] += 1)
          : (this.#lottoTicketResult[2] += 1);
      }
      if (matchNumberCount === LOTTO.FIRST_PLACE_MATCH) {
        this.#lottoTicketResult[4] += 1;
      }
    });
  }

  getLottoTicketResult() {
    return this.#lottoTicketResult;
  }
}

export default LottoTicketResult;
