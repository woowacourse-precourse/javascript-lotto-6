import LottoTicketGenerator from './LottoTicketGenerator.js';
import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class LottoPlayer {
  #lottoCount;
  #buyLottoList = [];
  #recordWinningRankList;

  constructor() {
    this.Validator = new Validator();
  }

  async setPurchaseAmount() {
    const input = await Console.readLineAsync('구매할 로또 금액을 입력하세요');
    const seed = Number(input);
    if (this.Validator.isValidPurchaseAmount(seed))
      this.#lottoCount = seed / 1000;
  }

  printUserPurchaseLottoAmount() {
    Console.print(`${this.#lottoCount}개를 구매했습니다.`);
  }

  // 로또 발행 및 저장
  userByLottoList() {
    const lottoCount = this.#lottoCount;
    for (let i = 0; lottoCount > i; i++) {
      const lotto = new LottoTicketGenerator();
      this.#buyLottoList.push(lotto.makeLotto());
    }
    // console.log('구매한 로또 리스트', this.#buyLottoList);
    // this.#buyLottoList.forEach(item => console.log(item.getLottoNumber()));
  }

  printUserLottoList() {
    this.#buyLottoList.forEach(lotto => {
      Console.print(lotto.getLottoNumber());
    });
  }

  // 당첨 내역 관리를 위한 보유한 로또들 반환
  getUserLottoList() {
    return this.#buyLottoList;
  }

  setWinnigLottoResult(winnigResultList) {
    this.#recordWinningRankList = winnigResultList;
  }

  printWinnigReulst() {
    Console.print(`    
    당첨 통계
    ---
    3개 일치 (5,000원) - ${this.#recordWinningRankList.FIFTH}개
    4개 일치 (50,000원) - ${this.#recordWinningRankList.FOURTH}개
    5개 일치 (1,500,000원) - ${this.#recordWinningRankList.THIRD}개
    5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#recordWinningRankList.SECOND}개
    6개 일치 (2,000,000,000원) - ${this.#recordWinningRankList.FIRST}개`);
  }

  printRateOfReturn(){
    
  }
}

export default LottoPlayer;
