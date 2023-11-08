import Lotto from '../src/Lotto.js';
import { ERROR } from '../src/LottoMessage.js';

describe('로또 클래스 테스트', () => {
  describe('예외 관련 테스트', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow(ERROR.count);
    });
    test('로또 번호의 개수가 6개보다 적으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5]);
      }).toThrow(ERROR.count);
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow(ERROR.unique);
    });

    test('1에서 45 사이가 아닌 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([0, 1, 2, 3, 4, 5]);
      }).toThrow(ERROR.between);
    });

    test('예외가 발생하지 않는 경우', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6]);
      }).not.toThrow();
    });
  });

  describe('로또 번호와 다른 번호의 일치 숫자 개수가 정확한지 확인하는 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const countMatchingWith = (numbers) => {
      return lotto.countMatchingWith(new Lotto(numbers));
    };
    test('아무것도 일치하지 않으면 0이 나온다.', () => {
      expect(countMatchingWith([7, 8, 9, 10, 11, 12])).toBe(0);
    });
    test('1개 일치하면 1이 나온다.', () => {
      expect(countMatchingWith([1, 8, 9, 10, 11, 12])).toBe(1);
    });
    test('2개 일치하면 2이 나온다.', () => {
      expect(countMatchingWith([1, 2, 9, 10, 11, 12])).toBe(2);
    });
    test('3개 일치하면 3이 나온다.', () => {
      expect(countMatchingWith([1, 2, 3, 10, 11, 12])).toBe(3);
    });
    test('4개 일치하면 4이 나온다.', () => {
      expect(countMatchingWith([1, 2, 3, 4, 11, 12])).toBe(4);
    });
    test('5개 일치하면 5이 나온다.', () => {
      expect(countMatchingWith([1, 2, 3, 4, 5, 12])).toBe(5);
    });
    test('6개 일치하면 6이 나온다.', () => {
      expect(countMatchingWith([1, 2, 3, 4, 5, 6])).toBe(6);
    });
  });
});
