import CheckWinning from '../src/CheckWinning';

describe('CheckWinning 모듈 테스트', () => {
	test('로또 번호가 모두 일치할 경우', () => {
		const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
		const BOUNUS_NUMBER = 7;
		const INPUT_LOTTO = [[1, 2, 3, 4, 5, 6]];
		const EXPECT_WINNING_LOTTO = [0, 0, 0, 0, 1];

		expect(CheckWinning(WINNING_NUMBER, BOUNUS_NUMBER, INPUT_LOTTO)).toEqual(EXPECT_WINNING_LOTTO);
	});

	test('로또 번호가 5개 + 보너스 번호가 일치할 경우', () => {
		const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
		const BOUNUS_NUMBER = 7;
		const INPUT_LOTTO = [[1, 2, 3, 4, 5, 7]];
		const EXPECT_WINNING_LOTTO = [0, 0, 0, 1, 0];

		expect(CheckWinning(WINNING_NUMBER, BOUNUS_NUMBER, INPUT_LOTTO)).toEqual(EXPECT_WINNING_LOTTO);
	});

	test('로또 번호가 5개 일치할 경우', () => {
		const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
		const BOUNUS_NUMBER = 7;
		const INPUT_LOTTO = [[1, 2, 3, 4, 5, 8]];
		const EXPECT_WINNING_LOTTO = [0, 0, 1, 0, 0];

		expect(CheckWinning(WINNING_NUMBER, BOUNUS_NUMBER, INPUT_LOTTO)).toEqual(EXPECT_WINNING_LOTTO);
	});

	test('로또 번호가 4개 일치할 경우', () => {
		const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
		const BOUNUS_NUMBER = 7;
		const INPUT_LOTTO = [[1, 2, 3, 4, 9, 8]];
		const EXPECT_WINNING_LOTTO = [0, 1, 0, 0, 0];

		expect(CheckWinning(WINNING_NUMBER, BOUNUS_NUMBER, INPUT_LOTTO)).toEqual(EXPECT_WINNING_LOTTO);
	});

	test('로또 번호가 3개 일치할 경우', () => {
		const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
		const BOUNUS_NUMBER = 7;
		const INPUT_LOTTO = [[1, 2, 3, 10, 9, 8]];
		const EXPECT_WINNING_LOTTO = [1, 0, 0, 0, 0];

		expect(CheckWinning(WINNING_NUMBER, BOUNUS_NUMBER, INPUT_LOTTO)).toEqual(EXPECT_WINNING_LOTTO);
	});

	test('로또 번호가 1개, 2개 일치할 경우', () => {
		const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
		const BOUNUS_NUMBER = 7;
		const INPUT_LOTTO = [
			[1, 12, 13, 10, 9, 8],
			[1, 2, 12, 13, 14, 15],
		];
		const EXPECT_WINNING_LOTTO = [0, 0, 0, 0, 0];

		expect(CheckWinning(WINNING_NUMBER, BOUNUS_NUMBER, INPUT_LOTTO)).toEqual(EXPECT_WINNING_LOTTO);
	});

	test('로또 번호가 모두 일치하지 않을 경우', () => {
		const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
		const BOUNUS_NUMBER = 7;
		const INPUT_LOTTO = [[10, 21, 31, 41, 51, 61]];
		const EXPECT_WINNING_LOTTO = [0, 0, 0, 0, 0];

		expect(CheckWinning(WINNING_NUMBER, BOUNUS_NUMBER, INPUT_LOTTO)).toEqual(EXPECT_WINNING_LOTTO);
	});
});
