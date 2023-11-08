import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import LottoResult from './LottoResult';

class LottoManager {
  #money;
  #count;
  #userLottoArray;
  #userLottoBonusNumber;
  #lottoArray;
  #result;

  constructor() {
    this.#money = 0;
    this.#count = 0;
    this.#userLottoArray = [];
    this.#userLottoBonusNumber = 0;
    this.#lottoArray = [];
    this.#result = null;
  }

  generateLottoNumber() {
    const lottoNumberArray = Random.pickUniqueNumbersInRange(1, 45, 6);

    return lottoNumberArray;
  }

  generateLottoTickets(money) {
    this.#money = money;
    this.#count = parseInt(money / 1000);
    const arr = Array(this.#count).fill(null);
    this.#lottoArray = arr.map(() => new Lotto(this.generateLottoNumber()));
  }

  printLottoTickets() {
    Console.print(`${this.#count}개를 구매했습니다.`);
    this.#lottoArray.forEach((array) => {
      Console.print(array.getLottoNumbersString());
    });
  }

  setUserLottoArray(userLottoArray) {
    this.#userLottoArray = userLottoArray;
  }

  setUserBonusNumber(userBonusNumber) {
    this.#userLottoBonusNumber = userBonusNumber;
  }

  determineLotteryResult() {
    const defaultResult = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5Bonus: 0,
      match6: 0,
    };

    this.#result = this.#lottoArray.reduce((resultSum, lotto) => {
      const lotteryResult = lotto.determineResult(this.#userLottoArray, this.#userLottoBonusNumber);

      switch (lotteryResult) {
        case LottoResult.MATCH_3:
          return { ...resultSum, case3: resultSum.case3 + 1 };
        case LottoResult.MATCH_4:
          return { ...resultSum, case4: resultSum.case4 + 1 };
        case LottoResult.MATCH_5:
          return { ...resultSum, case5: resultSum.case5 + 1 };
        case LottoResult.MATCH_5_BONUS:
          return { ...resultSum, case5Bonus: resultSum.case5Bonus + 1 };
        case LottoResult.MATCH_6:
          return { ...resultSum, case6: resultSum.case6 + 1 };
        default:
          return resultSum;
      }
    }, defaultResult);
  }

  printResult() {
    const result = this.#result;

    Console.print(`3개 일치 (${LottoResult.CASE_3.prize.toLocaleString('ko-KR')}원) - ${result.case3}개`);
    Console.print(`4개 일치 (${LottoResult.CASE_4.prize.toLocaleString('ko-KR')}원) - ${result.case4}개`);
    Console.print(`5개 일치 (${LottoResult.CASE_5.prize.toLocaleString('ko-KR')}원) - ${result.case5}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (${LottoResult.CASE_5_BONUS.prize.toLocaleString('ko-KR')}원) - ${result.case5Bonus}개`);
    Console.print(`6개 일치 (${LottoResult.CASE_6.prize.toLocaleString('ko-KR')}원) - ${result.case6}개`);
  }

  printYield() {
    const totalPrize =
      this.#result.case3 * LottoResult.CASE_3.prize +
      this.#result.case4 * LottoResult.CASE_4.prize +
      this.#result.case5 * LottoResult.CASE_5.prize +
      this.#result.case5Bonus * LottoResult.CASE_5_BONUS.prize +
      this.#result.case6 * LottoResult.CASE_6.prize;

    const yieldRate = (totalPrize / this.#money) * 100;

    Console.print(`총 수익률은 ${yieldRate.toFixed(1)}%입니다.`);
  }
}

export default LottoManager;
