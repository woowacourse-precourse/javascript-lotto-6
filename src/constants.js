//number

const LOTTO = {
	PRICE: 1000,
	LENGTH: 6,
	MIN_NUMBER: 1,
	MAX_NUMBER: 45,
};
const MONEY = {
	THREE: 5000,
	FOUR: 50000,
	FIVE: 1500000,
	SIX: 2000000000,
	BONUS: 30000000,
};
const DIVIDER = ',';
const EMPTY = '';
const BLANK = ' ';
const TYPE = {
	MONEY: 'money',
	NUMBERS: 'numbers',
	BONUS: 'bonus',
};
const REQUEST = {
	MONEY: '구입금액을 입력해주세요.',
	NUMBERS: '당첨 번호를 알려주세요.',
	BONUS: '보너스 번호를 입력해주세요.',
};
const RESPONSE = {
	AMOUNT_IS: (amount) => `${amount}개를 구매했습니다.`,
	PROFITS_RATE_IS: (percent) => `총 수익률 ${percent}%입니다`,
};
const STATISTICS = {
	RESULT_IS: '\n당첨 통계\n\n---',
	THREE_SAME: (amount) => `3개 일치 (5,000원) - ${amount}개 출력`,
	FOUR_SAME: (amount) => `4개 일치 (50,000원) - ${amount}개 출력`,
	FIVE_SAME: (amount) => `5개 일치 (1,500,000원) - ${amount}개  출력`,
	SIX_SAME: (amount) => `6개 일치 (2,000,000,000원) - ${amount}개  출력`,
	BONUS: (amount) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${amount}개  출력`,
};

const ERROR = {
	NO_INPUT: '[ERROR] 값을 입력해주세요.',
	ONLY_LENGTH_SIX: `[ERROR] 로또 번호는 ${LOTTO.LENGTH}개여야 합니다.`,
	ONLY_NUMBER: '[ERROR] 숫자만 입력 가능합니다.',
	MONEY_UNIT: `[ERROR] ${LOTTO.PRICE}원 단위로만 입력 가능합니다.`,
	NO_NUMBER_DUPLICATE: '[ERROR] 번호는 중복될 수 없습니다.',
	NUMBER_RANGE: `[ERROR] ${LOTTO.MIN_NUMBER}부터 ${LOTTO.MAX_NUMBER}까지만 입력 가능합니다.`,
};

export { TYPE, LOTTO, MONEY, EMPTY, BLANK, DIVIDER, REQUEST, RESPONSE, STATISTICS, ERROR };

export const REG_EXP = /[a-zA-Z가-힣[!@#$%^&*()_+{}[\]:;<>.,?~\\/-]]/g;
