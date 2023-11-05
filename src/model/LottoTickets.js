class LottoTickets {
  #lottoTickets = [];

  addLotto(lottoInstance) {
    this.#lottoTickets.push(lottoInstance);
  }

  getLottoTickets() {
    return [...this.#lottoTickets];
  }

  // TODO 로또 생성 여기서 하도록 위임할지 ?

  getMatchWinningNumbersCount(winningNumbers) {
    return this.#lottoTickets.map((lottoInstance) => {
      return lottoInstance.getMatchWinningNumbers(winningNumbers).length;
    });
  }
}

export default LottoTickets;
