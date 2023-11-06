"use strict";

const LOTTO_NUMBER = Object.freeze({
	minRange: 1,
	maxRange: 45,
	numbers: 6,
});

const PRINT_INPUT = Object.freeze({
	inputAmount: "구입금액을 입력해 주세요.\n",
});

const ERROR_MESSAGE = Object.freeze({
	numbersMustBeSix: "[ERROR] 로또 번호는 6개여야 합니다.",
	invalidInputNumber: "[ERROR] 숫자로 입력해주세요.",
	invalidInputAmount: "[ERROR] 1000원 이상 입력해주세요",
});

export { LOTTO_NUMBER, PRINT_INPUT, ERROR_MESSAGE };
