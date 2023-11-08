import { BonusLotto } from '../src/BonusLotto';

describe('BonusLotto 클래스 테스트', () => {
	test('보너스 번호 범위가 1~45가 아닐 경우 예외 발생', () => {
		expect(() => {
			new BonusLotto(52, [1, 2, 3, 4, 5, 6]);
		}).toThrow('[ERROR]');

		expect(() => {
			new BonusLotto(-10, [1, 2, 3, 4, 5, 6]);
		}).toThrow('[ERROR]');
	});

	test('보너스 번호와 당첨 번호가 중복', () => {
		expect(() => {
			new BonusLotto(6, [1, 2, 3, 4, 5, 6]);
		}).toThrow('[ERROR]');
	});
});
