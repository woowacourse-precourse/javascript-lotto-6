import LottoTicketGenerator from './LottoTicketGenerator.js';
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
    this.userByLottoList();
  }

  // 로또 발행 및 저장
  userByLottoList() {
    const lottoCount = this.#seed / 1000;
    for (let i = 0; lottoCount > i; i++) {
      const lotto = new LottoTicketGenerator();
      this.#buyLottoList.push(lotto.makeLotto());
    }
    console.log('구매한 로또 리스트', this.#buyLottoList);
    this.#buyLottoList.forEach(item => console.log(item.getLottoNumber()));
  }

  // 당첨 내역 관리
}

export default LottoPlayer;
