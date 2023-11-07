class ErrorCheck {
	static inputNumberCheck(input) {
		if (isNaN(input)) {
			throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
		}
	}

	static purchaseCountCheck(number) {
		if (number < 1) {
			throw new Error('[ERROR] 복권을 살 수 없어요!');
		}
	}
}

export default ErrorCheck;
