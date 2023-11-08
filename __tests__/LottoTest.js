import Lotto from '../src/models/Lotto.js';

describe('Lotto 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 오름차순으로 정렬되었는지 확인한다.', () => {
    const lottoNumbers = [43, 5, 3, 33, 6, 10];
    const lotto = new Lotto(lottoNumbers);
    expect(lotto.getLotto()).toEqual([3, 5, 6, 10, 33, 43]);
  });
});
