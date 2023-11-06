export const INPUT_MESSAGE = Object.freeze({
	purchaseAmount: '구입금액을 입력해 주세요.',
	matchNumbers: '\n당첨 번호를 입력해 주세요.',
	bonusNumber: '\n보너스 번호를 입력해 주세요.',
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
	isNull: '빈 문자열 입력이 존재합니다.',
	isNotInteger: '자연수만 입력 가능합니다.',
	isUnproperUnits: '금액이 1000원 단위가 아닙니다.',
	isTooLittleAmount: '구입금액은 1000원 이상부터 입력 가능합니다.',
	isTooMuchAmount: '구입금액이 최대 당첨금액보다 큽니다.',
	isOutOfRange: `당첨 번호는 ${INPUT_MESSAGE.RANDOM_MIN_NUMBER}~${INPUT_MESSAGE.RANDOM_MAX_NUMBER}사이만 입력 가능합니다.`,
	isUnvalidCount: `당첨 번호는 ${INPUT_MESSAGE.RANDOM_COUNT}개 입력해야 합니다.`,
	isDuplicateNumber: `중복된 번호가 존재합니다.`,
});
