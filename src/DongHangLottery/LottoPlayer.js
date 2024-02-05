import LottoTicketGenerator from './LottoTicketGenerator.js';
import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';
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

  constructor() {
    this.Validator = new Validator();
  }

  async setPurchaseAmount() {
    const input = await Console.readLineAsync('구매할 로또 금액을 입력하세요');
    const seed = Number(input)
    if (this.Validator.isValidPurchaseAmount(seed)) return (this.#seed = seed);
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
