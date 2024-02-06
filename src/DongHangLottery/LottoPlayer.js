import LottoTicketGenerator from './LottoTicketGenerator.js';
import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';
import { GameMessage } from './GameMessageManager/GameMessage.js';

class LottoPlayer {
  #lottoCount;
  #buyLottoList = [];
  #recordWinningRankList;
  #revinue = 0;

  constructor() {
    this.validator = new Validator();
  }

  async setPurchaseAmount() {
    const input = await Console.readLineAsync('구매할 로또 금액을 입력하세요');
    const seed = Number(input);

    try{
      if (!this.validator.isValidPurchaseAmount(seed)) return true
    } catch (e){
      Console.print(GameMessage.INVALID_INPUT_PRICE_TYPE_ERROR);
      await this.setPurchaseAmount();
    }

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
      const formattedNumbers = JSON.stringify(lotto.getLottoNumber());
      Console.print(formattedNumbers.replace(/,/g, ', '));
    });
  }

  getUserLottoList() {
    return this.#buyLottoList;
  }

  setWinnigLottoResult(winnigResultList) {
    this.#recordWinningRankList = winnigResultList;
  }

  printWinnigReulst() {
    Console.print(GameMessage.WINNIG_STATISICS);
    Console.print(GameMessage.LINE);
    Console.print(
      `${GameMessage.THIRD_PLACE}${this.#recordWinningRankList.FIFTH}개`,
    );
    Console.print(
      `${GameMessage.FOURTH_PLACE}${this.#recordWinningRankList.FOURTH}개`,
    );
    Console.print(
      `${GameMessage.FIFTH_PLACE}${this.#recordWinningRankList.THIRD}개`,
    );
    Console.print(
      `${GameMessage.FIFTH_PLACE_PLUS_BONUS}${this.#recordWinningRankList.SECOND}개`,
    );
    Console.print(
      `${GameMessage.SIX_PLACE}${this.#recordWinningRankList.FIRST}개`,
    );
  }

  calculRateOfReturn() {
    const keys = Object.keys(this.#recordWinningRankList);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]; 
      let winnings;
      if (key === GameMessage.FIRST) winnings = 2000000000;
      if (key === GameMessage.SECOND) winnings = 30000000;
      if (key === GameMessage.THIRD) winnings = 1500000;
      if (key === GameMessage.FOURTH) winnings = 50000;
      if (key === GameMessage.FIFTH) winnings = 5000;

      const value = this.#recordWinningRankList[key]; 

      this.#revinue += winnings * value;
    }
  }

  printRavenue() {
    // console.log('check revue', this.#revinue, this.#lottoCount);
    const rateOfRevenue = (this.#revinue / (this.#lottoCount * 1000)) * 100;
    Console.print(`총 수익률은 ${rateOfRevenue.toFixed(1)}%입니다.`);
  }
}

export default LottoPlayer;
