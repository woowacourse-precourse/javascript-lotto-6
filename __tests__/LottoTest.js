/* eslint-disable */
import Lotto from '../src/model/Lotto.js';
import { Place } from '../src/utils/Statistics.js';

describe('로또 클래스 테스트', () => {
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

  test('로또 번호는 음수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([-1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호는 45보다 큰 값이 아니면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호는 자연수가 아니면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호는 숫자가 아닌값이 포함되면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow('[ERROR]');
  });

  // 로또 번호 1,2,3,4,5,6으로 각 테스트 실행
  let lotto;
  beforeEach(() => {
    lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });

  test('로또 번호에 보너스번호가 포함 시 검증', () => {
    const answer = lotto.existBonusNumber(6);
    expect(answer).toBe(true);
  });

  test('로또 번호에 보너스번호가 미포함 시 검증', () => {
    const answer = lotto.existBonusNumber(7);
    expect(answer).toBe(false);
  });

  test('로또 번호에 보너스번호가 미포함 시 검증', () => {
    const answer = lotto.existBonusNumber(7);
    expect(answer).toBe(false);
  });

  test('로또 미당첨 검증', () => {
    lotto.compareNumbers([39, 40, 41, 42, 43, 44], 45);
    const expectedResult = {
      '1st': 0,
      '2nd': 0,
      '3rd': 0,
      '4th': 0,
      '5th': 0,
      profit: null
    };
    expect(Place).toEqual(expectedResult);
  });

  test('로또 1등 당첨 검증', () => {
    lotto.compareNumbers([1, 2, 3, 4, 5, 6], 45);
    expect(Place['1st']).toEqual(1);
  });

  test('로또 2등 당첨 검증', () => {
    lotto.compareNumbers([1, 2, 3, 4, 5, 45], 6);
    expect(Place['2nd']).toEqual(1);
  });

  test('로또 3등 당첨 검증', () => {
    lotto.compareNumbers([1, 2, 3, 4, 5, 44], 45);
    expect(Place['3rd']).toEqual(1);
  });

  test('로또 4등 당첨 검증', () => {
    lotto.compareNumbers([1, 2, 3, 4, 43, 44], 45);
    expect(Place['4th']).toEqual(1);
  });

  test('로또 5등 당첨 검증', () => {
    lotto.compareNumbers([1, 2, 3, 42, 43, 44], 45);
    expect(Place['5th']).toEqual(1);
  });
});
