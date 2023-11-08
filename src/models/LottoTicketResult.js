import { LOTTO } from '../utils/constants.js';

class LottoTicketResult {
  #lottoTicketResult;

  constructor(lottoTicket, winningNumber, bonusNumber) {
    this.#lottoTicketResult = [0, 0, 0, 0, 0]; //순서대로 5등 4등 3등 2등 1등
    this.#checkLottoTicketResult(lottoTicket, winningNumber, bonusNumber);
  }

  #checkLottoTicketResult(lottoTicket, winningNumber, bonusNumber) {
    lottoTicket.forEach((lotto) => {
      const matchNumberCount = this.#checkLotto(lotto, winningNumber);
      this.#setResult(lotto, matchNumberCount, bonusNumber);
    });
  }

  #checkLotto(lotto, winningNumber) {
    let matchNumberCount = 0;
    lotto.forEach((lottoNumber) => {
      if (winningNumber.includes(lottoNumber)) {
        matchNumberCount += 1;
      }
    });
    return matchNumberCount;
  }

  #setResult(lotto, matchNumberCount, bonusNumber) {
    if (
      matchNumberCount === LOTTO.FIFTH_PLACE_MATCH ||
      matchNumberCount === LOTTO.FOURTH_PLACE_MATCH
    ) {
      this.#lottoTicketResult[matchNumberCount - 3] += 1;
    }
    if (matchNumberCount === LOTTO.SECOND_OR_THIRD_PLACE_MATCH) {
      lotto.includes(bonusNumber)
        ? (this.#lottoTicketResult[3] += 1)
        : (this.#lottoTicketResult[2] += 1);
    }
    if (matchNumberCount === LOTTO.FIRST_PLACE_MATCH) {
      this.#lottoTicketResult[4] += 1;
    }
  }

  getLottoTicketResult() {
    return this.#lottoTicketResult;
  }
}

export default LottoTicketResult;
