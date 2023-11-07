import LottoRules from '../src/LottoRules';

describe('LottoRules 클래스 테스트', () => {
	test('일치하는 개수, 보너스 번호를 입력 받았을 때 올바른 금액을 반환한다.', () => {
		// given
		const cntExamples = [
			[4, 0],
			[3, 1],
			[5, 1],
			[6, 0],
		];
		const expectedWinnings = [50000, -1, 30000000, 2000000000];
		// when
		const rules = new LottoRules();

		// then
		cntExamples.forEach(([correctCnt, bonusCnt], i) => {
			expect(rules.getWinnings(correctCnt, bonusCnt)).toBe(
				expectedWinnings[i],
			);
		});
	});
});
