export default class LottoPlayer {
  #lottoTickets;

  #rankCounts;

  constructor() {
    this.#lottoTickets = [];
    this.#rankCounts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
  }

  setLottoTickets(lotto) {
    this.#lottoTickets.push(lotto);
  }

  getLottoTickets() {
    return this.#lottoTickets;
  }

  setRankCounts(correctNumberCounts, isIncludedBonusNumber) {
    switch (correctNumberCounts) {
      case 3:
        this.#rankCounts[5] += 1;
        break;
      case 4:
        this.#rankCounts[4] += 1;
        break;
      case 5:
        isIncludedBonusNumber ? (this.#rankCounts[2] += 1) : (this.#rankCounts[3] += 1);
        break;
      default:
        this.#rankCounts[1] += 1;
    }
  }

  getRankCounts() {
    return this.#rankCounts;
  }
}
