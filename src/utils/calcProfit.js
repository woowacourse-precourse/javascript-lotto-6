import { GAME_PROFIT } from '../constants/gameProfit.js';

/**
 * 로또 당첨 수익률을 계산합니다.
 * @param {number} purchaseAmount - 구입 금액
 * @param {number} winningAmount - 당첨 금액
 * @param {number} [roundingNumber=GAME_RULE.ROUNDING_NUMBER] - 수익률 몇 번째 자리에서 반올림 할지 설정 (기본 값 : 1)
 * @return {string} - 계산된 수익률 문자열로 포매팅 (ex: 100,000.0)
 */
const calcProfit = (
  purchaseAmount,
  winningAmount,
  roundingNumber = GAME_PROFIT.ROUNDING_NUMBER,
) => {
  const LOCALES = 'en-US';
  const option = {
    minimumFractionDigits: roundingNumber,
    maximumFractionDigits: roundingNumber,
  };
  const profitRate = (winningAmount / purchaseAmount) * GAME_PROFIT.RATIO;

  return `${profitRate.toLocaleString(LOCALES, option)}%`;
};

export default calcProfit;
