import LottoTicketGenerator from './LottoTicketGenerator.js';
import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class LottoPlayer {
  #lottoCount;
  #buyLottoList = [];
  #recordWinningRankList;
  #revinue = 0;

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

  calculRateOfReturn() {
    const keys = Object.keys(this.#recordWinningRankList); // ['name', 'weight', 'price', 'isFresh']

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]; // 각각의 키
      let winnings;
      if (key === 'FIRST') winnings = 2000000000;
      if (key === 'SECOND') winnings = 30000000;
      if (key === 'THIRD') winnings = 1500000;
      if (key === 'FOURTH') winnings = 50000;
      if (key === 'FIFTH') winnings = 5000;

      const value = this.#recordWinningRankList[key]; // 각각의 키에 해당하는 각각의 값

      this.#revinue += winnings * value;
    }
  }

  printRavenue() {
    console.log('check revue', this.#revinue, this.#lottoCount);
    const rateOfRevenue = (this.#revinue / (this.#lottoCount * 1000)) * 100;
    Console.print(`총 수익률은 ${rateOfRevenue.toFixed(1)}%입니다.`);
  }
}

export default LottoPlayer;
