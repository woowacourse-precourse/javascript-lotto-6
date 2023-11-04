import Lotto from '../src/Lotto.js';

describe('로또 클래스 정렬 테스트', () => {
  test('로또 번호가 오름차순으로 정렬된다.', () => {
    const lotto = new Lotto([1, 26, 16, 18, 2, 8]);
    expect(lotto.getNumbers()).toStrictEqual([1, 2, 8, 16, 18, 26]);
  });
});
