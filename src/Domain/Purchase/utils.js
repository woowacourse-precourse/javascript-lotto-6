import CONSTANTS from '../../Lib/constans.js';

/**
 * 주어진 금액을 1000원으로 나누어 로또 티켓의 개수를 게산하는 함수
 */
export const calculateTicketCountFromAmount = (validateAmount) => {
  return validateAmount / CONSTANTS.unit.value;
};
