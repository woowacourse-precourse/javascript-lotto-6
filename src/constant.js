// CONSTANTS
export const LOTTO_PRICE = 1000;
export const LOTTO_NUMBERS_CNT = 6;
export const LOTTO_NUMBERS_FLOOR = 1;
export const LOTTO_NUMBERS_CEIL = 45;

// ERROR_MESSAGE
export const SHOULD_BE_NO_DUP = '[ERROR] 로또 번호는 중복되지 않아야 합니다.';
export const SHOULD_BE_NATURAL_NUMBER = '[ERROR] 자연수를 입력해주세요.';
export const SHOULD_BE_DIVIDED_BY_PRICE = `[ERROR] ${LOTTO_PRICE}의 배수를 입력해주세요.`;
export const SHOULD_HAVE_ENOUGH_NUMBER = `[ERROR] ${LOTTO_NUMBERS_CNT}개의 숫자를 입력해주세요. 중복은 허용되지 않습니다.`;
export const SHOULD_BE_IN_RANGE = `[ERROR] ${LOTTO_NUMBERS_FLOOR}에서 ${LOTTO_NUMBERS_CEIL}사이의 숫자를 입력해주세요.`;
export const SHOULD_AVOID_DUP_BONUS = '[ERROR] 보너스 번호도 중복을 피해주세요.';

// QUESTIONS
export const ENTER_BUDGET = '구입금액을 입력해 주세요.\n';
export const ENTER_LOTTO_NUMBERS = '당첨 번호를 입력해 주세요.\n';
export const ENTER_BONUS_NUMBER = '보너스 번호를 입력해 주세요.\n';

export const DEFAULT_RULES = [
	{ correctCnt: 3, bonusCnt: 0, winnings: 5000 },
	{ correctCnt: 4, bonusCnt: 0, winnings: 50000 },
	{ correctCnt: 5, bonusCnt: 0, winnings: 1500000 },
	{ correctCnt: 5, bonusCnt: 1, winnings: 30000000 },
	{ correctCnt: 6, bonusCnt: 0, winnings: 2000000000 },
];
