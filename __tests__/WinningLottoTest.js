import { ERROR } from '../src/constant/LottoMessage.js';
import Lotto from '../src/Lotto.js';
import WinningLotto from '../src/WinningLotto.js';

describe('당첨 번호 클래스 테스트', () => {
  describe('로또 번호와 당첨 번호의 일치 숫자 개수가 정확한지 확인하는 테스트', () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);
    const countMatchingWith = (numbers) => {
      return winningLotto.countMatchingWith(new Lotto(numbers));
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

    test('5개 일치, 보너스 볼 일치하면 51이 나온다.', () => {
      expect(countMatchingWith([1, 2, 3, 4, 5, 7])).toBe(51);
    });

    test('6개 일치하면 6이 나온다.', () => {
      expect(countMatchingWith([1, 2, 3, 4, 5, 6])).toBe(6);
    });
  });

  describe('예외 발생 테스트', () => {
    test('보너스 번호가 1에서 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        new WinningLotto([1, 2, 3, 4, 5, 6], Number(46));
      }).toThrow(ERROR.between);
    });

    test('보너스 번호가 1에서 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        new WinningLotto([1, 2, 3, 4, 5, 6], Number('ㅇ'));
      }).toThrow(ERROR.between);
    });

    test('보너스 번호가 1에서 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        new WinningLotto([1, 2, 3, 4, 5, 6], Number(0));
      }).toThrow(ERROR.between);
    });

    test('로또 번호 중에 보너스 번호가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new WinningLotto([1, 2, 3, 4, 5, 6], 6);
      }).toThrow(ERROR.uniqueBonusNumber);
    });

    test('예외가 발생하지 않는 경우', () => {
      expect(() => {
        new WinningLotto([1, 2, 3, 4, 5, 6], 9);
      }).not.toThrow();
    });
  });
});
