import { MissionUtils } from '@woowacourse/mission-utils';
import LottoManager from '../src/models/LottoManager';

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 매니저 테스트', () => {
	test('로또 개수에 맞게 정상적으로 로또 인스턴스를 생성하는지 테스트', () => {
		const lottoManager = new LottoManager(10);
		expect(lottoManager.getLottosNumbers().length).toBe(10);
	});

	test('로또 매니저가 생성한 로또가 정상적인 로또 번호를 가지는지 테스트', () => {
		let randomNumbers = [10, 11, 20, 22, 25, 26];
		mockRandoms([randomNumbers]);

		const lottoManager = new LottoManager(1);
		const lottoNumbers = lottoManager.getLottosNumbers();

		expect(lottoNumbers[0]).toEqual([10, 11, 20, 22, 25, 26]);
	});
});
