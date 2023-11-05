class LottoTickets {
  #lottoTickets = [];

  addLotto(lottoInstance) {
    this.#lottoTickets.push(lottoInstance);
  }

  getLottoTickets() {
    return [...this.#lottoTickets];
  }

  getMatchWinningNumbersCount(winningNumbers) {
    return this.#lottoTickets.map((lottoInstance) => {
      return lottoInstance.getMatchWinningNumbers(winningNumbers).length;
    });
  }

  compareBonusNumber(bonusNumber) {
    return this.#lottoTickets.map((lottoInstance) => {
      return lottoInstance.isMatchBonusNumber(bonusNumber);
    });
  }
}

export default LottoTickets;
