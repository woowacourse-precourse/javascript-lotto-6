import Lotto from '../src/Lotto.js';
import { ascendingNumbers } from '../src/utils/array/array.module.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    // given - when - then
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    // given - when - then
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    // given - when - then
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 범위가 1 ~ 45를 벗어나면 예외가 발생한다.', () => {
    // given - when - then
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('생성된 로또 번호는 오름차순으로 정렬되어 있다.', () => {
    // given
    const numbers = [45, 44, 43, 42, 41, 40];
    // when
    const lotto = Lotto.fromByAscending(numbers);
    const lottoNumbers = lotto.getNumbers();
    // then
    expect(lottoNumbers).toStrictEqual(ascendingNumbers(numbers));
  });
});
