"use strict";

const COMMA = ",";

const LOTTO = Object.freeze({
	minRange: 1,
	maxRange: 45,
	count: 6,
	cost: 1000,
	totalCount: 7,
});

const PRINT_INPUT = Object.freeze({
	inputAmount: "구입금액을 입력해 주세요.\n",
	inputNumbers: "\n당첨 번호를 입력해 주세요.\n",
	inputBonusNum: "\n보너스 번호를 입력해 주세요.\n",
});

const PRINT_OUTPUT = Object.freeze({
	outputLottoCount: "개를 구매했습니다.",
	outputMatchingNum: "\n당첨 통계\n---",
	three: "3",
	four: "4",
	five: "5",
	fiveBonus: "5+1",
	six: "6",
	totalRate: "총 수익률은 ",
	percentage: "%입니다.",
});

const PRINT_MATHINGNUMBER = Object.freeze({
	three: "3개 일치 (5,000원) - ",
	four: "4개 일치 (50,000원) - ",
	five: "5개 일치 (1,500,000원) - ",
	fiveBonus: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
	six: "6개 일치 (2,000,000,000원) - ",
	unit: "개",
});

const MONEY = Object.freeze({
	krw5000: 5000,
	krw50000: 50000,
	krw1500000: 1500000,
	krw30000000: 30000000,
	krw2000000000: 2000000000,
});

const ERROR_MESSAGE = Object.freeze({
	invalidNumbersCount: "[ERROR] 로또 번호는 6개여야 합니다.",
	duplication: "[ERROR] 중복되지 않은 숫자를 입력해주세요",
	invalidNumberRange: "[ERROR] 로또 번호의 숫자 범위는 1~45입니다. 범위 내의 숫자를 입력해주세요",
	invalidInputNumber: "[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해주세요.",
	invalidInputAmount: "[ERROR] 1000원 이상 입력해주세요",
});

export { COMMA, LOTTO, PRINT_INPUT, PRINT_OUTPUT, PRINT_MATHINGNUMBER, ERROR_MESSAGE, MONEY };
