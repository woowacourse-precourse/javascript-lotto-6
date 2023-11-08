import PRIZE_AMOUNT_BY_BANK from '../constants/Bank';
import { WINNING_RANK_COUNT } from '../constants/lotto';
import ERROR_MESSAGES from '../constants/message/error';
import { ZERO } from '../constants/validate';
import validationUtils from '../services/utils/validation';
import { isDivisibleByLottoPrice } from './shop';

const PERCENTAGE = 100;
const DECIMAL_TWO_DIGIT_OR_LESS = 1;

const validateAmount = (number) => {
  validationUtils.isIntegerToThrow(number);
  isDivisibleByLottoPrice(number);
};

// 존재 여부
const validateRanksKeys = (ranks) => {
  const has = Object.prototype.hasOwnProperty;
  Object.keys(WINNING_RANK_COUNT).every((rankKey) => {
    if (!has.call(ranks, WINNING_RANK_COUNT[rankKey])) {
      throw new Error(ERROR_MESSAGES.notObjextKey);
    }
    return true;
  });
};

// 유형 검사
const validateRankValueNumber = (ranks) =>
  Object.values(ranks).every((value) =>
    validationUtils.isIntegerToThrow(value),
  );

const bank = {
  /**
   * 당첨 금액의 총 합계
   * @param {Object} ranks - 당첨 등수를 담은 객체
   * @returns {number} 당첨 금액의 총 합계
   */
  calculateTotalPrizeAmount: (ranks) => {
    validationUtils.isObject(ranks);
    validateRanksKeys(ranks);
    validateRankValueNumber(ranks);
    return Object.entries(ranks).reduce(
      (acc, [key, value]) => acc + PRIZE_AMOUNT_BY_BANK[key] * value,
      ZERO,
    );
  },

  /**
   * 수익률 계산
   * @param {number} purchaseCost - 구매비용
   * @param {number} totalPrize - 총 당첨 금액
   * @returns {number} 수익률
   */
  calculateProfitRate: (purchaseCost, totalPrize) => {
    validateAmount(purchaseCost);
    validateAmount(totalPrize);
    return Number(
      ((totalPrize / purchaseCost) * PERCENTAGE).toFixed(
        DECIMAL_TWO_DIGIT_OR_LESS,
      ),
    );
  },
};

export default bank;
