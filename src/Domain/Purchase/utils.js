import CONSTANTS from '../../Lib/constans.js';

/**
 * 주어진 금액을 1000원으로 나누어 로또 티켓의 개수를 계산하는 함수
 *
 * @param {number} validateAmount - 로또 티켓 개수를 계산하고자 하는 금액
 * @returns {number} 계산된 로또 티켓의 개수
 */
export const calculateTicketCountFromAmount = (validateAmount) => {
  return validateAmount / CONSTANTS.unit.value;
};
