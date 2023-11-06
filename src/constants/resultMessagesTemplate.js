import { DEFAULT_NUM } from './conditions.js';
import { RESULT_MESSAGE } from './output.js';

const MESSAGES_TEMPLATE = Object.freeze({
  [RESULT_MESSAGE.threeMatch]: DEFAULT_NUM,
  [RESULT_MESSAGE.fourMatch]: DEFAULT_NUM,
  [RESULT_MESSAGE.fiveMatchNotBonus]: DEFAULT_NUM,
  [RESULT_MESSAGE.fiveMatchAndBonus]: DEFAULT_NUM,
  [RESULT_MESSAGE.allMatch]: DEFAULT_NUM,
});

export default MESSAGES_TEMPLATE;
