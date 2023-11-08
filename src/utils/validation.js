import LOTTO_INFO from '../constants/lottoInfo.js';

export const isEmptyString = (str) => str.trim() === '';
export const isIntegerString = (str) => Number.isInteger(Number(str));
export const isIntegerNumList = (strList) => strList.every(isIntegerString);
export const hasDuplicateNumber = (numList) => numList.some((num) => numList.indexOf(num) !== numList.lastIndexOf(num));

export const isValidPurchaseUnit = (num) => num % LOTTO_INFO.purchase.unit === 0 && num >= LOTTO_INFO.purchase.unit;
export const isInvalidNumberRange = (num) => num < LOTTO_INFO.lottoNumber.min || num > LOTTO_INFO.lottoNumber.max;
export const hasInvalidNumberRange = (numList) => numList.some(isInvalidNumberRange);
