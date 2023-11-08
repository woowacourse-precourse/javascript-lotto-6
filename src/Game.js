import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './constants/message';
import formatAmount from './utils/formatAmount';

class Game {
  #purchasedLottoList;
  #winnerLotto;
  #bonusNum;
  #purchaseAmount;
  #sameNumCountList = [];
  #winningLottoCount = {
    three: 0,
    four: 0,
    five: 0,
    fiveNBonus: 0,
    six: 0,
  };

  constructor(purchasedLottoList, winnerLotto, bonusNum, purchaseAmount) {
    this.#purchasedLottoList = purchasedLottoList;
    this.#winnerLotto = winnerLotto;
    this.#bonusNum = bonusNum;
    this.#purchaseAmount = purchaseAmount;
    this.game();
  }

  /**
   * 
   * @description 구매한 로또들과 당첨 로또의 비교를 실행하는 함수
   */
  game() {
    this.#purchasedLottoList.forEach((purchasedLotto) => {
      this.#sameNumCountList[this.#sameNumCountList.length] = this.compareLotto(purchasedLotto);
    });

    this.gameResult();
  }

  /**
   * 
   * @description 당첨 로또와 구매한 로또를 비교(당첨 로또 번호를 순회하며 구매한 로또에 같은 숫자가 존재할 경우 일치 횟수를 증가)하는 함수
   * @param {Array} purchasedLotto 구매한 로또
   * @returns 
   */
  compareLotto(purchasedLotto) {
    let sameNumCount = 0;

    this.#winnerLotto.forEach((winnerLottoNum) => {
        if(purchasedLotto.indexOf(winnerLottoNum) !== -1) sameNumCount++; 
    })

    // 5개의 숫자가 일치하며 보너스 번호가 존재할 경우
    if((sameNumCount === 5) && (purchasedLotto.indexOf(Number(this.#bonusNum)) !== -1)) {
        sameNumCount = 10;
    } 

    return sameNumCount;
  }

  /**
   * 
   * @description 로또 게임 결과를 출력하는 함수
   */
  gameResult() {
    this.#sameNumCountList.forEach(sameNumCount => {
      if (sameNumCount === 3) this.#winningLottoCount.three++;
      if (sameNumCount === 4) this.#winningLottoCount.four++;
      if (sameNumCount === 5) this.#winningLottoCount.five++;
      if (sameNumCount === 6) this.#winningLottoCount.six++;
      if (sameNumCount === 10) this.#winningLottoCount.fiveNBonus++;
    });

    for (const key in this.#winningLottoCount) {
      Console.print(`${GAME_MESSAGE.winningLottoPrice[key][0]} (${formatAmount(GAME_MESSAGE.winningLottoPrice[key][1])}원) - ${this.#winningLottoCount[key]}개`)
    }

    let totalIncome = 0;
    for (const key in this.#winningLottoCount) {
      totalIncome += GAME_MESSAGE.winningLottoPrice[key][1] * this.#winningLottoCount[key];
    }
    const rateOfReturn = Number((totalIncome / this.#purchaseAmount * 100).toFixed(1));
    Console.print(`${GAME_MESSAGE.totalReturn[0]} ${formatAmount(rateOfReturn)}%${GAME_MESSAGE.totalReturn[1]}`);
  }
}

export default Game;