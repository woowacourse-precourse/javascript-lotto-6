import Lotto from '../src/Lotto';

describe('로또 클래스 메서드 테스트', () => {
	let lotto;

	describe('validateLottoAmount 메서드 테스트', () => {
		test('구매금액 유효성 검사 1000의 배수인 경우', () => {
			const perchaseAmount = '1000';
			lotto = new Lotto(perchaseAmount);

			expect(() => lotto.validateLottoAmount()).not.toThrow();
		});
		test('구매금액 유효성 검사 1000의 배수가 아닌 경우', () => {
			const perchaseAmount = '1100';
			const errorMessage =
				'[ERRPR] 로또 구매 금액은 1,000원 단위로 입력해주세요';
			lotto = new Lotto(perchaseAmount);

			expect(() => lotto.validateLottoAmount()).toThrow(errorMessage);
		});
	});
});
