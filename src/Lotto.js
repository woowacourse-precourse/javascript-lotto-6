import { Random } from '@woowacourse/mission-utils';
import {
  VALIDATION_ERRORS_MESSAGE,
  LOTTO_NUMBER_RANGE,
  LOTTO_NUMBER_COUNT,
  WINNING_MONEY,
} from './Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!numbers || numbers.length === 0)
      throw new Error(VALIDATION_ERRORS_MESSAGE.EMPTY_INPUT);
    if (numbers.some((number) => isNaN(number)))
      throw new Error(VALIDATION_ERRORS_MESSAGE.NOT_ONLY_NUMBER);
    if (numbers.length !== 6)
      throw new Error(VALIDATION_ERRORS_MESSAGE.ENTER_SIX_NUMBERS);
    if (numbers.some((number) => number < 1 || number > 45))
      throw new Error(VALIDATION_ERRORS_MESSAGE.OVER_THE_RANGE);
    if (new Set(numbers).size !== 6)
      throw new Error(VALIDATION_ERRORS_MESSAGE.CONTAIN_SAME_NUMBER);
  }

  // 로또 번호 반환
  lottoNumbers() {
    return this.#numbers;
  }

  // 로또 생성
  static generateLotto(lottoCount) {
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_RANGE.MIN,
        LOTTO_NUMBER_RANGE.MAX,
        LOTTO_NUMBER_COUNT.LOTTO,
      );
      lottos.push(lotto.sort((a, b) => a - b));
    }

    return lottos;
  }

  // 당첨 통계에 당첨 내역 비교해서 넣어주기
  static compareLottoNumber(winningRank, lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const matchCount = this.matchNumberCount(lotto, winningNumbers);

      if (matchCount === 3) {
        winningRank.fifth += 1;
      } else if (matchCount === 4) {
        winningRank.fourth += 1;
      } else if (matchCount === 5) {
        lotto.includes(bonusNumber)
          ? (winningRank.second += 1)
          : (winningRank.third += 1);
      } else if (matchCount === 6) {
        winningRank.first += 1;
      }
    });
  }

  // 로또 한장당 당첨 내역 비교
  static matchNumberCount(lotto, winningNumbers) {
    const matchingNumbers = winningNumbers.filter((number) =>
      lotto.includes(Number(number)),
    );
    return matchingNumbers.length;
  }

  // 로또 상금 계산
  static totalPrize(winningRank) {
    return Object.entries(winningRank).reduce((currentTotal, [key, value]) => {
      if (value > 0) {
        const prize = WINNING_MONEY[key.toUpperCase()] * value;
        return currentTotal + prize;
      }
      return currentTotal;
    }, 0);
  }

  //  수익률 계산
  static calculateProfit(money, winningRank) {
    const profit = (this.totalPrize(winningRank) / money) * 100;
    return profit.toFixed(1);
  }
}

export default Lotto;
