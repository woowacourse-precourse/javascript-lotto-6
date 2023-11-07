const errorMessage = Object.freeze({
	NOT_NUMBER: '[ERROR] 문자가 아닌 숫자를 입력해주세요.',
	INVALID_PURCHASE_AMOUNT: '[ERROR] 1000원 단위의 금액을 입력해주세요.',
	NOT_SIX_COUNT: '[ERROR] 총 6자리의 당첨 번호를 입력해주세요',
	NOT_ENOUGH_PURCHASE_AMOUNT: '[ERROR] 금액이 부족합니다.',
	DUPLICATED_NUMBER: '[ERROR] 중복되지 않은 숫자를 입력해주세요.',
	OUT_OF_RANGE: '[ERROR] 1부터 45사이의 숫자만 입력해주세요.',
	ALREADY_PICKED_NUMBER: '[ERROR] 당첨 번호로 선택하지 않은 수 중에 입력해주세요.',
	NOT_NATURAL_NUMBER: '[ERROR] 자연수만 입력해주세요.',
	UNUSUAL_INPUT: '[ERROR] 올바른 형태로 입력해주세요.',
});

export default errorMessage;