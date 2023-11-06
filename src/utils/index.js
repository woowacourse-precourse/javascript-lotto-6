import LOTTO from '../constants/lotto.js';

/**
 * 중첩 객체까지 불변 객체 만들기
 */
export const deepFreeze = (object) => {
  for (let key in object) {
    if (typeof object[key] === 'object' && object[key] !== null) {
      deepFreeze(object[key]);
    }
  }
  return Object.freeze(object);
};

/**
 * 1000단위에 , 를 추가하고 소수점 첫 번째 자리까지 보이도록 포맷팅
 */
export const formatNumberWithCommasAndDecimals = (number) => {
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};

/**
 * 1 ~ 45 사이의 정수
 */
export const isValidNumber = (num) => {
  return Number.isInteger(num) && num >= 1 && num <= 45;
};

/**
 * 1000원 단위로 나눔
 */
export const calculateTicketCountFromAmount = (validateAmount) => {
  return validateAmount / LOTTO.unit.value;
};
