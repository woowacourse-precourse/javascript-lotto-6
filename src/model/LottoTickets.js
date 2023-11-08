class LottoTickets {
  #lottoTickets = [];

  addLotto(lottoInstance) {
    this.#lottoTickets.push(lottoInstance);
  }

  getLottoTicket(index) {
    if (index < 0 || index >= this.#lottoTickets.length) return null;

    return this.#lottoTickets[index];
  }

  getLottoTickets() {
    return [...this.#lottoTickets];
  }

  getWinningNumberMatchCount(winningNumbers) {
    return this.#lottoTickets.map((lottoInstance) => {
      return lottoInstance.getMatchWinningNumbers(winningNumbers).length;
    });
  }

  includesBonusNumber(bonusNumber) {
    return this.#lottoTickets.map((lottoInstance) => {
      return lottoInstance.isMatchBonusNumber(bonusNumber);
    });
  }
}

export default LottoTickets;
