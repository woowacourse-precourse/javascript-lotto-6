export const INPUT_MESSAGE = Object.freeze({
	purchaseAmount: '구입금액을 입력해 주세요.',
	RANDOM_MIN_NUMBER: 1,
	RANDOM_MAX_NUMBER: 45,
	RANDOM_COUNT: 6,
	LOTTO_UNITS: 1000,
});

export const OUTPUT_MESSAGE = Object.freeze({
	infoLottoNumbers: '개를 구매했습니다.',
});

export const ERROR_MESSAGE = Object.freeze({
	commonMessage: '[ERROR]',
	isNull: '구입금액은 반드시 입력해야 합니다.',
	isNotInteger: '자연수만 입력 가능합니다.',
	isUnproperUnits: '금액이 1000원 단위가 아닙니다.',
	isTooLittleAmount: '구입금액은 1000원 이상부터 입력 가능합니다.',
	isTooMuchAmount: '구입금액이 최대 당첨금액보다 큽니다.',
});
