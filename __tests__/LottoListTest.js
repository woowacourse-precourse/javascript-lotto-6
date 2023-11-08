import LottoList from '../src/LottoList';
import Validator from '../src/Validator';
import { LOTTO_NUMBERS_CEIL, LOTTO_NUMBERS_FLOOR } from '../src/constant';

describe('LottoList 클래스 테스트', () => {
	test('반환된 로또 목록에 올바른 로또가, 원하는 개수만큼 생성되어있어야 한다.', () => {
		// given
		// Lotto_Price는 1000으로 한다.

		// when
		const lottoList = new LottoList('3000');
		const list = lottoList.getLottoList();

		// then
		expect(list.length).toBe(3);
		list.forEach((lotto) => {
			const numbers = lotto
				.getLottoNumber()
				.map((number) => `${number}`);
			expect(
				numbers.some(
					(number) =>
						number <
							LOTTO_NUMBERS_FLOOR ||
						number > LOTTO_NUMBERS_CEIL,
				),
			).toBe(false);
		});
	});
});
