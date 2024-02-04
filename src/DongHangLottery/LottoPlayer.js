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

  constructor(seed) {
    this.#seed = seed;
  }

  // 구매한 로또 개수는 seed 나누기 1000의 몫 출력하기

  setbuyLottoList(lottoList) {
    this.#buyLottoList = lottoList;
  }

  // 당첨 내역 관리
}
