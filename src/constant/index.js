import {
  NUMBER,
  BONUS_NUMBER,
  BUYING_PRICE,
  LOTTO_NUMBER_RANGE,
  LOTTO_NUMBERS,
} from './error.js';
import { COUNT, INCLUDE_BONUS, EXCLUDE_BONUS } from './match.js';
import INPUT from './input.js';
import OUTPUT from './output.js';
import LOTTO from './lotto.js';

const ERROR = {
  NUMBER,
  BONUS_NUMBER,
  BUYING_PRICE,
  LOTTO_NUMBER_RANGE,
  LOTTO_NUMBERS,
};
const MATCH = { COUNT, INCLUDE_BONUS, EXCLUDE_BONUS };

export { ERROR, INPUT, OUTPUT, LOTTO, MATCH };
