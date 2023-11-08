"use strict";

export const LOTTO_RANGE = Object.freeze({
	lottoMaxRange: 45,
	lottoMaxLength: 6,
});

export const ERROR_MESSAGE = Object.freeze({
	lottoCount: '[ERROR] 로또 번호는 6개여야 합니다.',
	lottoForm: '[ERROR] 1000원 단위로 입력해주시거나, 문자가 아닌 숫자를 입력해주시기 바랍니다.',
	lottoRange: '[ERROR] 로또 숫자는 1~45 범위 이내로 입력해주시기 바랍니다.',
    lottoDuplication: '[ERROR] 로또 숫자가 중복됩니다.',
});