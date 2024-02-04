class LottoPlayer {
  #seed;
  #buyLottoList = [];
  #recordWinningRank = {
    FIRST: 0,
    SECOND: 0,
    THIRD: 0,
    FOURTH: 0,
    FIFTH: 0,
  };

  constructor() {}

  setSeed(input) {
    this.#seed = input;
  }

  setbuyLottoList(lottoList) {
    this.#buyLottoList = lottoList;
  }

  // 당첨 내역 관리
}
