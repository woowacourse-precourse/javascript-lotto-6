/* eslint-disable */
import Lotto from '../src/Lotto.js';
import View  from '../src/views/view.js';

describe('로또 출력 테스트', () => {
  test('로또 출력 테스트', async () => {
    // given
    const lottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [5, 6, 7, 8, 9, 10],
    ];
    const lottos = lottoNumbers.map((numbers) => new Lotto(numbers));
    const expected = '[1, 2, 3, 4, 5, 6]\n[5, 6, 7, 8, 9, 10]';
    const view = new View;
    // when
    const resultString = await view.returnPurchaseLottos(lottos);
    // then
    expect(resultString).toEqual(expected);
  });
});
