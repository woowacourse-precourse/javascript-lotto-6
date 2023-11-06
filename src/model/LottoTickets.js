class LottoTickets {
  #lottoTickets = [];

  addLotto(lottoInstance) {
    this.#lottoTickets.push(lottoInstance);
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
