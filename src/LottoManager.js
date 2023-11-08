class LottoManager {
  #lottoPrice
  #lottos
  #ranks

  constructor() {
    this.#lottoPrice = 1000;
    this.#lottos = [];
    this.#ranks = Array(5).fill(0);
  }

  lottoTicketExchange(amount) {
    return amount / this.getLottoPrice();
  }

  issueLotto(lottos) {
    lottos.map((lotto) => this.#lottos.push(lotto));
  }

  #compareWinningNumber(winningNumber) {
    const result = [];

    this.#lottos.map((lotto) => {
      const winning = lotto.filter((number) => winningNumber.includes(number));
      result.push(winning.length);
    });

    return result;
  }

  #compareBonusNumber(bonusNumber) {
    const result = [];

    this.#lottos.map((lotto) => {
      const bonus = lotto.includes(bonusNumber);
      result.push(bonus);
    })

    return result;
  }
  
  #rank(winningNumber, bonusNumber) {
    if (winningNumber === 6) return 4;
    if (winningNumber === 5 && bonusNumber) return 3;
    if (winningNumber === 5) return 2;
    if (winningNumber === 4) return 1;
    if (winningNumber === 3) return 0;
  }

  drawingLotto(winningNumber, bonusNumber) {
    const winnings = this.#compareWinningNumber(winningNumber);
    const bonusNumbers = this.#compareBonusNumber(bonusNumber);

    winnings.map((winning, ticket) => {
      const rank = this.#rank(winning, bonusNumbers[ticket]);
      if (rank !== undefined) {
        this.#ranks[rank] += 1;
      }
    })
  }

  getLottoPrice() {
    return this.#lottoPrice;
  }

  getLottos() {
    return this.#lottos;
  }

  getRanks() {
    return this.#ranks;
  }
}

export default LottoManager;
