import VarificationManager from '../src/Models/VarificationManager';

describe('checkPurchasePrice => 인자로 들어오는 값이 구매 금액으로 유효한지 테스트', () => {
	test('aaa', () => {
		// given
		const cost = '1000j';

		// when, then
		expect(() => VarificationManager.checkPurchasePrice(cost)).toThrow(
			'[ERROR] 유효하지 않은 숫자입니다.',
		);
	});
});
