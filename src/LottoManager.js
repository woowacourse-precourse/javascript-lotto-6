import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import LottoResult from './LottoResult';
import { MONEY_CONSTANTS, LOTTO_CONSTANTS } from './constants/constants';

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
    const lottoNumberArray = Random.pickUniqueNumbersInRange(
      LOTTO_CONSTANTS.minRange,
      LOTTO_CONSTANTS.maxRange,
      LOTTO_CONSTANTS.digits,
    );

    return lottoNumberArray;
  }

  generateLottoTickets(money) {
    this.#money = money;
    Console.print(this.#money);

    this.#count = parseInt(money / MONEY_CONSTANTS.countUnit);
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

    Console.print('당첨 번호를 입력해 주세요.');
    Console.print(this.#userLottoArray);
  }

  setUserBonusNumber(userBonusNumber) {
    this.#userLottoBonusNumber = userBonusNumber;

    Console.print('보너스 번호를 입력해 주세요.');
    Console.print(this.#userLottoBonusNumber);
  }

  initializeResult() {
    return {
      match3: 0,
      match4: 0,
      match5: 0,
      match5Bonus: 0,
      match6: 0,
    };
  }

  updateResultWithMatch(result, lotteryResult) {
    switch (lotteryResult) {
      case LottoResult.MATCH_3:
        return { ...result, match3: result.match3 + 1 };
      case LottoResult.MATCH_4:
        return { ...result, match4: result.match3 + 1 };
      case LottoResult.MATCH_5:
        return { ...result, match5: result.match3 + 1 };
      case LottoResult.MATCH_5_BONUS:
        return { ...result, match5Bonus: result.match3 + 1 };
      case LottoResult.MATCH_6:
        return { ...result, match6: result.match3 + 1 };
      default:
        return result;
    }
  }

  determineLotteryResult() {
    let result = this.initializeResult();

    for (const lotto of this.#lottoArray) {
      const lotteryResult = lotto.determineResult(this.#userLottoArray, this.#userLottoBonusNumber);
      const updatedResult = this.updateResultWithMatch(result, lotteryResult);
      result = updatedResult;
    }

    this.#result = result;
  }

  printResult() {
    const result = this.#result;

    Console.print('당첨 통계');
    Console.print('---');

    const resultItems = [
      { count: result.match3, prize: LottoResult.MATCH_3.prize, text: '3개 일치' },
      { count: result.match4, prize: LottoResult.MATCH_4.prize, text: '4개 일치' },
      { count: result.match5, prize: LottoResult.MATCH_5.prize, text: '5개 일치' },
      { count: result.match5Bonus, prize: LottoResult.MATCH_5_BONUS.prize, text: '5개 일치, 보너스 볼 일치' },
      { count: result.match6, prize: LottoResult.MATCH_6.prize, text: '6개 일치' },
    ];

    resultItems.forEach((item) => {
      Console.print(`${item.text} (${item.prize.toLocaleString('ko-KR')}원) - ${item.count}개`);
    });
  }

  printYield() {
    const result = this.#result;
    const totalPrize =
      result.match3 * LottoResult.MATCH_3.prize +
      result.match4 * LottoResult.MATCH_4.prize +
      result.match5 * LottoResult.MATCH_5.prize +
      result.match5Bonus * LottoResult.MATCH_5_BONUS.prize +
      result.match6 * LottoResult.MATCH_6.prize;

    const yieldRate = (totalPrize / this.#money) * 100;
    const formattedYieldRate = yieldRate.toFixed(1);

    Console.print(`총 수익률은 ${formattedYieldRate}%입니다.`);
  }
}

export default LottoManager;
