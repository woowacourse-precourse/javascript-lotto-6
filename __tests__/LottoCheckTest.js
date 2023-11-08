import LottoCheck from '../src/Utils/lottoCheck';

describe('LottoCheck 유틸 함수 테스트', () => {
	test.each([
		[[1, 2, 3, 7, 8, 9], 3],
		[[1, 2, 7, 8, 9, 10], 2],
		[[1, 7, 8, 9, 11, 29], 1],
	])('%s는 로또 당첨 번호와 %s개 일치한다.', (userLotto, expectCount) => {
		//given
		const winnerLotto = [1, 2, 3, 4, 5, 6];

		expect(LottoCheck.checkCorrectNumber(winnerLotto, userLotto)).toBe(expectCount);
	});
});
