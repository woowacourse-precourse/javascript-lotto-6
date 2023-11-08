export const INPUT_MESSAGES = Object.freeze({
	INPUT_MONEY: "구입금액을 입력해 주세요.\n",
	INPUT_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
	INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
});

export const ERRORS = Object.freeze({
	INVALID_UNIT_INPUT: "[ERROR] 1,000원 단위로 금액을 입력해주세요.",
	INVALID_NUMBER: "[ERROR] 숫자를 입력해주세요.",
	INVALID_NUMBER_RANGE: "[ERROR] 1~45의 숫자를 입력해주세요.",
	INVALID_NUMBERS_LENGTH: "[ERROR] 6개의 숫자를 입력해주세요.",
	INVALID_NUMBERS_DUPLICATE: "[ERROR] 각각 다른 숫자를 입력해주세요.",
});

export const OUTPUT_MESSAGES = Object.freeze({
	OUTPUT_LOTTO_COUNT: (lottoCount) => {
		return `\n${lottoCount}개를 구매했습니다.`;
	},
});
