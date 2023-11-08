import Lotto from '../src/Lotto';
import WinningLotoCounter from '../src/WinningLottoCounter';

describe('WinningLottoCounter 클래스 테스트', () => {
	test('로또 규칙에 따라 당첨된 로또가 몇 개인지 올바르게 반환해야 한다.', () => {
		// given
		const lottoList = [
			new Lotto([1, 2, 3, 4, 5, 6]),
			new Lotto([1, 2, 3, 4, 5, 7]),
			new Lotto([1, 2, 3, 4, 5, 10]),
			new Lotto([1, 2, 3, 10, 11, 12]),
		];
		// DEFAULT_LOTTO_RULES 가정

		// when
		const counter = new WinningLotoCounter();
		counter.countWinningLottos(lottoList, '1,2,3,10,11,12', '7');
		const winningLottoList = counter.getWinningLottoList();

		// then
		expect(winningLottoList.map((statisticObj) => statisticObj.count)).toEqual([
			2, 1, 0, 0, 1,
		]);
	});
});
