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

	describe('validateLottoWinningNumbers 메서드 테스트', () => {
		test('당첨번호 유효성 검사 - 다른 구분자가 있는 경우', () => {
			const winningNumber = '1,2.3.4.5,6';
			const errorMessage = '[ERROR] 로또 번호는 쉼표(,)로 구분해야 합니다.';
			lotto = new Lotto(winningNumber);

			expect(() => lotto.validateLottoWinningNumbers()).toThrow(errorMessage);
		});

		test('당첨번호 유효성 검사 - 당첨번호 개수가 잘못된 경우', () => {
			const winningNumber = '1,2,3,4,5';
			const errorMessage = '[ERROR] 로또 당첨 번호는 6개여야 합니다.';
			lotto = new Lotto(winningNumber);

			expect(() => lotto.validateLottoWinningNumbers()).toThrow(errorMessage);
		});

		test('당첨번호 유효성 검사 - 당첨번호 범위가 잘못된 경우', () => {
			const winningNumber = '0,2,3,4,5,46';
			const errorMessage = '[ERROR] 로또 번호는 1과 45 사이의 숫자여야 합니다.';
			lotto = new Lotto(winningNumber);

			expect(() => lotto.validateLottoWinningNumbers()).toThrow(errorMessage);
		});

		test('당첨번호 유효성 검사 - 중복된 당첨번호가 있는 경우', () => {
			const winningNumber = '1,2,3,4,5,5';
			const errorMessage = '[ERROR] 로또 번호는 중복이 없어야 합니다.';
			lotto = new Lotto(winningNumber);

			expect(() => lotto.validateLottoWinningNumbers()).toThrow(errorMessage);
		});
	});
});
