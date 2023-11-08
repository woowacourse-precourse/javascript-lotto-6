import LottoGenerator from '../src/LottoGenerator.js';

describe('로또 번호 생성 클래스 테스트', () => {
  test('로또 숫자를 6개 생성한다.', () => {
    const expected = 6;
    const lotto = new LottoGenerator().generateLotto();

    expect(lotto.length).toStrictEqual(expected);
  });
});
