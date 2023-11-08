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

	describe('validateLottoBonusNumber 메서드 테스트', () => {
		test('보너스 번호 유효성 검사 - 당첨번호와 중복된 수를 입력한 경우', () => {
			const bonusNumber = '1';
			const winningNumber = [1, 2, 3, 4, 5, 6];
			const errorMessage =
				'[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.';
			lotto = new Lotto(bonusNumber);

			expect(() => lotto.validateLottoBonusNumber(winningNumber)).toThrow(
				errorMessage
			);
		});

		test('보너스 번호 유효성 검사 - 올바른 보너스 번호일 경우', () => {
			const bonusNumber = '7';
			const winningNumber = [1, 2, 3, 4, 5, 6];
			lotto = new Lotto(bonusNumber);

			expect(() => lotto.validateLottoBonusNumber(winningNumber)).not.toThrow();
		});
	});

	describe('getMatchingNumbersArray 메서드 테스트', () => {
		test('랜덤으로 생성된 나의 복권 티켓에서 일치하는 번호의 개수가 나오는지 테스트', () => {
			const lottoTicketsArray = [
				[8, 21, 23, 41, 42, 43],
				[3, 5, 11, 16, 32, 38],
				[7, 11, 16, 35, 36, 44],
				[1, 8, 11, 31, 41, 42],
				[1, 3, 5, 14, 22, 45],
			];
			const lottoWinningNumberArray = [1, 3, 5, 9, 10, 39];
			const expectArray = [0, 2, 0, 1, 3];
			lotto = new Lotto(lottoTicketsArray);

			expect(
				lotto.getMatchingNumbersArray(lottoWinningNumberArray)
			).toStrictEqual(expectArray);
		});
	});

	describe('getMatchingBonusNumberArray 메서드 테스트', () => {
		test('램덤으로 생성된 나의 복권 티켓에서 보너스 번호와 일치하지 여부', () => {
			const lottoTicketsArray = [
				[8, 21, 23, 41, 42, 43],
				[3, 5, 11, 16, 32, 38],
				[7, 11, 16, 35, 36, 44],
				[1, 8, 11, 31, 41, 42],
				[1, 3, 5, 14, 22, 45],
			];
			const bonusNumber = 7;
			const expectArray = [0, 0, 1, 0, 0];
			lotto = new Lotto(lottoTicketsArray);

			expect(lotto.getMatchingBonusNumberArray(bonusNumber)).toStrictEqual(
				expectArray
			);
		});
	});

	describe('getTotalPrize 메서드 테스트', () => {
		test('총 상금 계산', () => {
			const matchingNumbersArray = [3, 0, 5, 0, 1];
			const matchingBonusNumberArray = [0, 0, 1, 1, 0];
			const WINNING_RULES = [
				{ match: 3, prize: '5,000원', prizeNumber: 5000 },
				{ match: 4, prize: '50,000원', prizeNumber: 50000 },
				{ match: 5, prize: '1,500,000원', prizeNumber: 1500000 },
				{
					match: 5,
					bonus: true,
					prize: '30,000,000원',
					bonusText: ', 보너스 볼 일치',
					prizeNumber: 30000000,
				},
				{ match: 6, prize: '2,000,000,000원', prizeNumber: 2000000000 },
			];
			const expectTotalPrize = 30005000;

			lotto = new Lotto(matchingNumbersArray);

			expect(lotto.getTotalPrize(matchingBonusNumberArray)).toBe(
				expectTotalPrize
			);
		});
	});
});
