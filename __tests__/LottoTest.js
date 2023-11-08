import Lotto from '../src/Lotto.js';
import { LOTTO_NUMBER_MAX, LOTTO_NUMBER_MIN, THE_NUMBER_OF_LOTTO_NUMBER } from '../src/constant/constants.js';

describe('로또 클래스 테스트', () => {
  test(`로또 번호의 개수가 ${THE_NUMBER_OF_LOTTO_NUMBER}개가 넘어가면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test(`로또 번호가 ${LOTTO_NUMBER_MIN}부터 ${LOTTO_NUMBER_MAX} 사이의 숫자가 아니면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 50]);
    }).toThrow('[ERROR]');
  });

  test('발행된 로또 번호를 오름차순으로 정렬한다.', () => {
    const lotto = new Lotto([29, 15, 30, 2, 3, 28]);

    lotto.sortLottoNumbers();

    expect(lotto.myNumbers).toEqual([2, 3, 15, 28, 29, 30]);
  })
});
