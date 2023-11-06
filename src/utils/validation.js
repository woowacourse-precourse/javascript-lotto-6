import { SETTING } from '../constants';
import { ERROR_MESSAGE } from '../constants';
const { 
  not_above_min_cost,
  not_natural_number,
  not_number,
  not_range,
  not_six_numbers,
} = ERROR_MESSAGE;

export const isNumber = (num) => {
  if (Number.isNaN(num)) {
    throw new Error(not_number);
  }
}

export const isNaturalNumber = (num) => {
  if (Number(num) % 1 !== 0) {
    throw new Error(not_natural_number);
  }
}

export const isAboveMinNumber = (num) => {
  if (Number(num) < SETTING.min_cost) {
    throw new Error(not_above_min_cost);
  }
}

export const hasSixValues = (arr) => {
  if (arr.length !== SETTING.input_length) {
    throw new Error(not_six_numbers);
  }
}

export const isLottoNumberRange = (num) => {
  if (Number(num) < SETTING.min_lotto_number 
  || Number(num) > SETTING.max_lotto_number) {
    throw new Error(not_range);
  }
}