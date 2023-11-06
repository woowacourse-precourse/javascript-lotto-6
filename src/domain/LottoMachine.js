import {DrawResultDto} from "./dto/DrawResultDto.js";
import Lotto from "./Lotto.js";

/**
 * @description 로또를 추첨해주는 클래스
 */
export class LottoMachine {
  /**
   * @type {number[]}
   * @description 당첨 번호를 갖고있음
   */
  #winningNumbers;
  /**
   * @type {number}
   * @description 보너스 번호를 갖고있음
   */
  #bonusNumber;
  /**
   * @type {number}
   */
  #totalCost = 0;
  /**
   * @type {number}
   */
  #totalEarning = 0;
  /**
   * @type {number}
   */
  #firstRank = 0;
  /**
   * @type {number}
   */
  #secondRank = 0;
  /**
   * @type {number}
   */
  #thirdRank = 0;
  /**
   * @type {number}
   */
  #forthRank = 0;
  /**
   * @type {number}
   */
  #fifthRank = 0;

  /**
   *
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   */
  constructor(winningNumbers, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#bonusNumber = bonusNumber;
  }

  /**
   * @param {Lottos} boughtLottos
   * @return {DrawResultDto}
   * @description 로또 추첨하기 -> 몇개 일치하는지 세는 로직
   */
  drawAll(boughtLottos) {
    boughtLottos.lottos.forEach((lotto) => {
      const hasBonusNumber = lotto.hasBonusNumber(this.#bonusNumber);
      const matchingNumberCount = lotto.countIncludingNumbers(
        this.#winningNumbers
      );
      this.#draw(matchingNumberCount, hasBonusNumber);
    });
    return new DrawResultDto(
      this.#calculateEarningRate(),
      this.#firstRank,
      this.#secondRank,
      this.#thirdRank,
      this.#forthRank,
      this.#fifthRank
    );
  }

  /**
   *
   * @param{number} matchingNumberCount
   * @param{boolean} hasBonusNumber
   * @return {void}
   * @description 한장의 로또 추첨!
   * 1. 수익금 : totalEarning
   * 2. 각 등수별 로또 개수 : firstRank, ...
   * 3. 구매금액 lottos.length * Lotto.price(1000원 상수로 설정)
   */
  #draw(matchingNumberCount, hasBonusNumber) {
    // 1. 총 구매금액 올리기
    this.#totalCost += Lotto.PRICE;
    // 2. 총 수익금액 올리기
    // 3. 등수 올리기 (rank)
    if (hasBonusNumber && matchingNumberCount === 5) {
      this.#secondRank++;
      this.#totalEarning += 30_000_000;
      return;
    }
    if (matchingNumberCount === 6) {
      this.#firstRank++;
      this.#totalEarning += 2_000_000_000;
    }
    if (matchingNumberCount === 5) {
      this.#thirdRank++;
      this.#totalEarning += 1_500_000;
    }
    if (matchingNumberCount === 4) {
      this.#forthRank++;
      this.#totalEarning += 50_000;
    }
    if (matchingNumberCount === 3) {
      this.#fifthRank++;
      this.#totalEarning += 5_000;
    }
    // TODO : 전부 상수화하기!!! 배운거 다 정리(정규표현쓰는 부분 실험한것도 정리)
  }

  /**
   *
   * @param lotto
   * @return {number}
   * @description 겹치는 번호만 필터로 모아서 총 몇개겹치는지 세준다
   *
   * ex. 5개 겹치면 5 리턴
   */
  #compareMatchingNumber(lotto) {
    let matchNum = lotto.filter((n) => this.#winningNumbers.includes(n));
    return matchNum.length;
  }

  /**
   * @return {number}
   * @description 수익률 구하는 함수 따로 빼주기
   */
  #calculateEarningRate() {
    const earningRate100 = (this.#totalEarning / this.#totalCost) * 100; // 주의)백분율로 구하기
    return Number(earningRate100.toFixed(1)); // 소수점 둘째자리에서 반올림
  }
}
