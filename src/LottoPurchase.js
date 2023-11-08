import { Console } from '@woowacourse/mission-utils';
import getRandomLotto from './utils/getRandomLotto';
import { GAME_MESSAGE } from './constants/message';

class LottoPurchase {
  #purchasedLottoList = [];

  constructor(lottoCount) {
    this.purchaseLotto(lottoCount);
  }

  /**
   * 
   * @description 구매한 로또의 개수를 출력하고 랜덤으로 로또 번호를 받는 함수
   * @param {number} lottoCount 구매한 로또의 개수
   */
  purchaseLotto(lottoCount) {
    Console.print(`${lottoCount}${GAME_MESSAGE.printPurchasedLottoCount}`);

    for (let i = 0; i < lottoCount; i++) {
      const purchasedLotto = getRandomLotto();
      const sortedPurchasedLotto = purchasedLotto.sort((a, b) => a - b);
      this.#purchasedLottoList[this.#purchasedLottoList.length] = sortedPurchasedLotto;
      Console.print(`[${sortedPurchasedLotto.join(', ')}]`);
    }
  }

  get purchasedLottoList() {
    return this.#purchasedLottoList;
  }

}

export default LottoPurchase;