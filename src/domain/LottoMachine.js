import {DrawResultDto} from "./dto/DrawResultDto.js";
import {NUMBER} from "../constants/constants.js";

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
      const matchingNumberCount = lotto.countMatchingNumbers(
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
   */
  #draw(matchingNumberCount, hasBonusNumber) {
    // 1. 총 구매금액 올리기 - 하나 할때마다 1000원씩 더하는 로직
    this.#totalCost += NUMBER.LOTTO_PRICE;
    // 2. 총 수익금액 올리기
    // 3. 등수 올리기 (rank)
    if (hasBonusNumber && matchingNumberCount === 5) {
      this.#secondRank++;
      this.#totalEarning += NUMBER.SECOND_PRIZE;
      return;
    }
    if (matchingNumberCount === 6) {
      this.#firstRank++;
      this.#totalEarning += NUMBER.FIRST_PRIZE;
    }
    if (matchingNumberCount === 5) {
      this.#thirdRank++;
      this.#totalEarning += NUMBER.THIRD_PRIZE;
    }
    if (matchingNumberCount === 4) {
      this.#forthRank++;
      this.#totalEarning += NUMBER.FORTH_PRIZE;
    }
    if (matchingNumberCount === 3) {
      this.#fifthRank++;
      this.#totalEarning += NUMBER.FIFTH_PRIZE;
    }
  }

  /**
   * @return {number}
   * @description 수익률 구하는 함수 따로 빼주기
   */
  #calculateEarningRate() {
    const earningRate100 = (this.#totalEarning / this.#totalCost) * 100; // 주의)백분율로 구하기
    return Number(earningRate100.toFixed(NUMBER.TO_FIXED_DIGITS)); // 소수점 둘째자리에서 반올림
  }
}
