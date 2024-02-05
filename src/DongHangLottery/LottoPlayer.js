import LottoTicketGenerator from './LottoTicketGenerator.js';
import { Console } from '@woowacourse/mission-utils';
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

  async setPurchaseAmount() {
    const seed = await Console.readLineAsync('구매할 로또 금액을 입력하세요');
    console.log("user input seed",seed)
    return this.#seed = seed;
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

  getUserLottoList() {
    return this.#buyLottoList;
  }

  // 당첨 내역 관리
}

export default LottoPlayer;
