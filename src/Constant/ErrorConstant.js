import RULE_CONSTANT from "./RuleConstant.js";

const ERROR_PRIFIX = '[Error] ';
const NEGATIVE_AMOUNT = '는 0보다 작습니다';

const UNDER_THAN_SPECIFIED_COUNT = `는 ${RULE_CONSTANT.COMMON_WINNING_NUMBERS_SIZE}가 아닙니다.`;


const UNCONVERTIBLE_STRING = '변환 불가능한 문자열입니다';
const REMAINDER_MISMATCH = '예상 나머지와 계산된 나머지가 다릅니다';
const EMPTY_STRING = '빈문자열입니다';
const NOT_A_NUMBER = '인자가 숫자가 아닙니다';
const IS_NOT_STRING = '인자가 string이 아닙니다.';
const IS_NUT_ARRAY = '인자가 array가 아닙니다';

export default {
  ERROR_PRIFIX,
  NEGATIVE_AMOUNT,
  REMAINDER_MISMATCH,
  UNDER_THAN_SPECIFIED_COUNT,
  UNCONVERTIBLE_STRING,
  EMPTY_STRING,
  NOT_A_NUMBER,
  IS_NOT_STRING,
  IS_NUT_ARRAY,
}