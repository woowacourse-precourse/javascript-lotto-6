import { SETTING } from '../constants';

export const isNumber = (num) => {
  return Number.isNaN(num);
}

export const isNaturalNumber = (num) => {
  return Number(num) % 1 === 0;
}

export const isAboveMinNumber = (num) => {
  return Number(num) > SETTING.min_cost;
}

export const hasSixValues = (arr) => {
  return arr.length === SETTING.input_length;
}

export const isLottoNumber = (num) => {
  return Number(num) >= SETTING.min_lotto_number || Number(num) <= SETTING.max_lotto_number;
}