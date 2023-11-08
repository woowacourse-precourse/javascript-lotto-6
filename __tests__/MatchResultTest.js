import { matchResult } from '../src/MatchResult';

describe('맟춘 결과를 제대로 반환하는지 테스트', () => {
	it('맞춘 개수에 따라 제대로 반환하는지 테스트', () => {
		const matchList = [
			{ lottoMatch: 3, bonusMatch: 0 },
			{ lottoMatch: 4, bonusMatch: 0 },
			{ lottoMatch: 5, bonusMatch: 0 },
			{ lottoMatch: 5, bonusMatch: 1 },
			{ lottoMatch: 6, bonusMatch: 0 },
		];

		const result = matchResult(matchList);

		// 3개 일치 (5등)는 1개,
		// 4개 일치 (4등)는 1개,
		// 5개 일치 + 보너스 번호 불일치 (3등)는 1개,
		// 5개 일치 + 보너스 번호 일치 (2등)는 1개,
		// 6개 일치 (1등)는 1개입니다.
		expect(result).toEqual([1, 1, 1, 1, 1]);
	});
});