import LOTTO_INFO from '../constants/lottoInfo.js';

export const isEmptyString = (str) => str.trim() === '';
export const isIntegarString = (str) => Number.isInteger(Number(str));

export const isValidPurchaseUnit = (num) =>
  num % LOTTO_INFO.purchase.unit === 0 && num >= LOTTO_INFO.purchase.unit;
