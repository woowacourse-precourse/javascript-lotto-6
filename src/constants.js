export const ERROR = {
	DUPLICATE: '[ERROR] 번호는 중복될 수 없습니다.',
	NEGATIVE: '[ERROR] 양수만 입력해주세요.',
	NOTING: '[ERROR] 번호를 입력해주세요.',
	NOT_NUMBER: '[ERROR] 숫자만 입력 가능합니다.',
	NOT_SIX_LENGTH: '[ERROR]',
	OUT_OF_MONEY: '[ERROR] 1000원 단위로만 구매할 수 있습니다.',
	OUT_OF_LIMIT: '[ERROR] 1~45 사이의 숫자를 입력해주세요.',
};

export const MESSAGE = {
	PRICE: '구입금액을 입력해 주세요.\n',
	WINNING: '\n당첨 번호를 입력해 주세요.\n',
	BONUS: '\n보너스 번호를 입력해 주세요.\n',
	TICKET: (tickets) => `\n${tickets}개를 구매했습니다.`,
	RESULT_TITLE: `\n당첨 통계\n---`,
	RESULT_FIFTH: (fifth) => `3개 일치 (5,000원) - ${fifth}개`,
	RESULT_FOURTH: (fourth) => `4개 일치 (50,000원) - ${fourth}개`,
	RESULT_THIRD: (third) => `5개 일치 (1,500,000원) - ${third}개`,
	RESULT_SECOND: (second) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`,
	RESULT_FIRST: (first) => `6개 일치 (2,000,000,000원) - ${first}개`,
	RESULT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const LOTTO = {
	PRICE: 1000,
	MIN: 1,
	MAX: 45,
	LENGTH: 6,
};
