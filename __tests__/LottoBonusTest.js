import LottoBonus from '../src/Models/LottoBouns';

describe('Lotto 보너스 번호 테스트', () => {
	test('로또 번호와 중복된 값이 입력된 경우 에러가 발생한다.', () => {
		// given
		const lottoNumber = [1, 2, 3, 4, 5, 6];
		const bounsNumber = 6;

		// when, then
		expect(() => new LottoBonus(bounsNumber, lottoNumber)).toThrow('[ERROR]');
	});

	test.each([
		['문자가', 'k'],
		['음수가', -1],
		['소수가', 0.1],
		['0이', 0],
		['범위를 벗어난 값이', 999],
	])('%s 입력된 경우 에러가 발생한다. - %s', (_, value) => {
		// given
		const lottoNumber = [1, 2, 3, 4, 5, 6];
		const bounsNumber = value;

		expect(() => new LottoBonus(bounsNumber, lottoNumber)).toThrow('[ERROR]');
	});
});
