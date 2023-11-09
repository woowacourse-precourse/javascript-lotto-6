import { SETTING, ERROR_MESSAGE } from '../constants';
const { 
  not_lotto_cost,
  not_natural_number,
  not_number,
  not_range,
  not_six_numbers,
  not_unique,
  not_unique_bonus,
} = ERROR_MESSAGE;

export const isNumber = (num) => {
  num = Number(num);
  if (Number.isNaN(num)) {
    throw new Error(not_number);
  }
}

export const isNaturalNumber = (num) => {
  num = Number(num);
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error(not_natural_number);
  }
}

export const isDivideMinCost = (num) => {
  if (Number(num) % SETTING.lotto_cost !== 0) {
    throw new Error(not_lotto_cost);
  }
}

export const hasSixValues = (arr) => {
  if (arr.length !== SETTING.size) {
    throw new Error(not_six_numbers);
  }
}

export const isLottoNumberRange = (num) => {
  if (Number(num) < SETTING.min_lotto_number 
  || Number(num) > SETTING.max_lotto_number) {
    throw new Error(not_range);
  }
}

export const isUnique = (arr) => {
  const set = new Set(arr);
  if (set.size !== arr.length) {
    throw new Error(not_unique);
  }
}

export const isUniqueBonus = (arr, num) => {
  if (arr.includes(num)) {
    throw new Error(not_unique_bonus);
  }
}