import { WINNING_RANK_COUNT, ZERO } from '../constants/lotto/numbers';
import ERROR_MESSAGES from '../constants/message/error';
import ValidationError from '../error/Validation';
import validationUtils from '../services/utils/validation';
import { isDivisibleByLottoPrice } from './shop';

const PLACE = {
  [ZERO]: 0,
  [WINNING_RANK_COUNT.firstPlace]: 2000000000,
  [WINNING_RANK_COUNT.secondPlace]: 30000000,
  [WINNING_RANK_COUNT.thirdPlace]: 1500000,
  [WINNING_RANK_COUNT.fourthPlace]: 50000,
  [WINNING_RANK_COUNT.fifthPlace]: 5000,
};
const PERCENTAGE = 100;
const DECIMAL_TWO_DIGIT_OR_LESS = 1;
// 낙첨
const RANK_MIN = 0;
const RANK_MAX = 5;

const checkRank = (rank) => {
  if (rank.some((number) => number < RANK_MIN || number > RANK_MAX)) {
    throw new ValidationError(ERROR_MESSAGES.outOfRange);
  }
  return true;
};

const validateAmount = (number) => {
  validationUtils.isInteger(number);
  isDivisibleByLottoPrice(number);
};

const validateRanksValueRange = (ranks) =>
  Object.values(ranks).every((value) => checkRank(value));

// 존재 여부
const validateRanksKeys = (ranks) => {
  const has = Object.prototype.hasOwnProperty;
  Object.keys(WINNING_RANK_COUNT).every((rankKey) =>
    has.call(ranks, WINNING_RANK_COUNT[rankKey]),
  );
};

// 유형 검사
const validateRankValueNumber = (ranks) =>
  Object.values(ranks).every((value) => validationUtils.isInteger(value));

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
    validateRanksValueRange(ranks);
    return Object.entries(ranks).reduce(
      (acc, [key, value]) => acc + PLACE[key] * value,
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

// 당첨 둥수 합산
// 수익률 계산
export default bank;
