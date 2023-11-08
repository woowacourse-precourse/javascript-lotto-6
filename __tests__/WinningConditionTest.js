import WinningCondition from '../src/WinningCondition';

describe('WinningCondition 클래스 테스트', () => {
	test('일치 개수, 보너스 개수를 입력받으면 조건에 맞는지 판별해주어야한다.', () => {
		// given
		const winningConditionExample = {
			correctCnt: 5,
			bonusCnt: 0,
			winnings: 1500000,
		};

		// when
		const condition = new WinningCondition(winningConditionExample);

		// then
		expect(condition.checkWin(5, 0)).toBe(true);
		expect(condition.checkWin(5, 1)).toBe(true);
		expect(condition.checkWin(4, 0)).toBe(false);
	});
	test('일치 개수, 보너스 개수를 입력받아 조건에 맞으면 당첨금을 반환한다.', () => {
		// given
		const winningConditionExample = {
			correctCnt: 5,
			bonusCnt: 0,
			winnings: 1500000,
		};

		// when
		const condition = new WinningCondition(winningConditionExample);

		// then
		expect(condition.getWinnings(5, 0)).toBe(1500000);
	});
});
