class LottoTicketResult {
  #lottoTicketResult;

  constructor(lottoTicket, winningNumber, bonusNumber) {
    this.#lottoTicketResult = [0, 0, 0, 0, 0]; //순서대로 5등 4등 3등 2등 1등
    this.#checkLottoTicketResult(lottoTicket, winningNumber, bonusNumber);
  }

  #checkLottoTicketResult(lottoTicket, winningNumber, bonusNumber) {
    lottoTicket.forEach((lotto) => {
      let sameNumberCount = 0;
      lotto.forEach((lottoNumber) => {
        if (winningNumber.includes(lottoNumber)) {
          sameNumberCount += 1;
        }
      });
      if (sameNumberCount === 3) {
        this.#lottoTicketResult[0] += 1;
      }
      if (sameNumberCount === 4) {
        this.#lottoTicketResult[1] += 1;
      }
      if (sameNumberCount === 5) {
        lotto.includes(bonusNumber)
          ? (this.#lottoTicketResult[3] += 1)
          : (this.#lottoTicketResult[2] += 1);
      }
      if (sameNumberCount === 6) {
        this.#lottoTicketResult[4] += 1;
      }
    });
  }

  getLottoTicketResult() {
    return this.#lottoTicketResult;
  }
}

export default LottoTicketResult;
