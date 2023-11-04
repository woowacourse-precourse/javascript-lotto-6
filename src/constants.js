export const ONE_LOTTO_PRICE = 1000;
export const LOTTO_NUMBER_LENGTH = 6;
export const BONUS_NUMBER_LENGTH = 1;
export const POSSIBLE_MIN_NUMBER = 1;
export const POSSIBLE_MAX_NUMBER = 45;
export const POSSIBLE_MIN_INPUT_LENGTH = 11;
export const POSSIBLE_MAX_INPUT_LENGTH = 17;
export const LOTTO_TO_MONEY = {
	THREE: 5000,
	FOUR: 50000,
	FIVE: 1500000,
	FIVE_AND_BONUS: 30000000,
	SIX: 2000000000,
};

export const ASK_HOW_MUCH_MONEY = '구입금액을 입력해 주세요.';
export const TELL_HOW_MANY_LOTTOS_BOUGHT = '개를 구매했습니다.';
export const ASK_LOTTO_NUMBER = '당첨 번호를 입력해 주세요.';
export const INPUT_CONDITION = `${POSSIBLE_MIN_NUMBER}~${POSSIBLE_MAX_NUMBER}사이의 고유한 번호 ${LOTTO_NUMBER_LENGTH}개를 입력해주세요. 번호는 쉼표(,)로 구분합니다.`;
export const BONUS_INPUT_CONDITION = `${POSSIBLE_MIN_NUMBER}~${POSSIBLE_MAX_NUMBER}사이의 번호 ${BONUS_NUMBER_LENGTH}개를 입력해주세요.`;
export const ASK_BONUS_NUMBER = '보너스 번호를 입력해 주세요.';
export const RESULT = '당첨 통계';
export const DIVISION_LINE = '---';
export const UNIT_GAE = '개';
export const THREE_EQUAL = '3개 일치 (5,000원) - ';
export const FOUR_EQUAL = '4개 일치 (50,000원) - ';
export const FIVE_EQUAL = '5개 일치 (1,500,000원) - ';
export const FIVE_AND_BONUS_EQUAL = '5개 일치, 보너스 볼 일치 (30,000,000원) - ';
export const SIX_EQUAL = '6개 일치 (2,000,000,000원) - ';

export const LOTTO_ERROR = {
	name: `로또 ${LOTTO_NUMBER_LENGTH}개 번호 입력값 에러`,
	message: {
		OK_INPUT: `${POSSIBLE_MIN_NUMBER}~${POSSIBLE_MAX_NUMBER}사이의 고유한 번호 ${LOTTO_NUMBER_LENGTH}개를 입력해주세요.`,
		NO_INPUT: '입력값이 없습니다.',
		NO_DUPLICATE: '중복되는 번호가 있습니다.',
		NO_BLANK: ' 공백" "을 사용할 수 없습니다.',
		NO_CHARS: ',를 제외한 특수문자/문자는 입력할 수 없습니다.',
		LENGTH: `${LOTTO_NUMBER_LENGTH}개의 번호를 입력해주세요.`,
		OVER_LENGTH: `번호 개수가 ${LOTTO_NUMBER_LENGTH}보다 많습니다.`,
		UNDER_LENGTH: `번호 개수가 ${LOTTO_NUMBER_LENGTH}보다 적습니다.`,
	},
};

export const BONUS_ERROR = {
	name: '보너스 번호 입력값 에러',
	message: {
		NO_RANGE: `${POSSIBLE_MIN_NUMBER}~${POSSIBLE_MAX_NUMBER}사이의 번호 중에 입력해주세요.`,
		NO_INPUT: LOTTO_ERROR.message.NO_INPUT,
		NO_CHARS: '특수문자/문자는 입력할 수 없습니다.',
		NO_BLANK: LOTTO_ERROR.message.NO_BLANK,
	},
};

export const REG_EXP = /[a-zA-Z가-힣[!@#$%^&*()_+{}[\]:;<>.,?~\\/-]]/g;
export const REG_EXP_EXCEPT_COMMA = /[a-zA-Z가-힣[!@#$%^&*()_+{}[\]:;<>.?~\\/-]]/g;
//const BLANK_REGEXP = /\s/g;
