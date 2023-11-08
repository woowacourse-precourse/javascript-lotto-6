/**
 * 안내 문구
 */
export const INFO_MSG = Object.freeze({
  AMOUNT_INPUT: "구입금액을 입력해주세요.\n",
  WINNING_INPUT: "당첨 번호를 입력해 주세요.\n",
  BONUS_INPUT: "보너스 번호를 입력해 주세요.\n",
});

export const MIN_NUMBER = 1;
export const MAX_NUMBER = 45;
export const NUM_OF_LOTTO = 6;

export const LOTTO_VALUE = 1000;

const FIRST_REWARD = 2000000000;
const SECOND_REWARD = 30000000;
const THIRD_REWARD = 1500000;
const FOURTH_REWARD = 50000;
const FIFTH_REWARD = 5000;

/**
 * 등수에 따른 상금
 */
export const PRICES = Object.freeze({
  1: FIRST_REWARD,
  2: SECOND_REWARD,
  3: THIRD_REWARD,
  4: FOURTH_REWARD,
  5: FIFTH_REWARD,
});

/**
 * 일치하는 번호 갯수에 따른 등수
 */
export const WINNING_RANKS = Object.freeze({
  3: 5,
  4: 4,
  5: 3,
  6: 2,
  7: 1,
});

const TEMP = {};
Object.values(WINNING_RANKS).forEach((rank) => (TEMP[rank] = 0));
/**
 * winning_result 객체 기본형 - 가능한 순위에 따라 연산
 */
export const WINNING_RESULT_DEFAULT = TEMP;

/**
 * 최소 당첨 횟수
 */
export const MIN_WINNING = Math.min(
  ...Object.keys(WINNING_RANKS).map((value) => parseInt(value))
);
/**
 * 최대 당첨 횟수
 */
export const MAX_WINNING = Math.max(
  ...Object.keys(WINNING_RANKS).map((value) => parseInt(value))
);

/**
 * 등수에 따른 일치 번호 문구
 */
export const WINNING_INFO = Object.freeze({
  5: `3개 일치 (${PRICES[5].toLocaleString()}원)`,
  4: `4개 일치 (${PRICES[4].toLocaleString()}원)`,
  3: `5개 일치 (${PRICES[3].toLocaleString()}원)`,
  2: `5개 일치, 보너스 볼 일치 (${PRICES[2].toLocaleString()}원)`,
  1: `6개 일치 (${PRICES[1].toLocaleString()}원)`,
});
