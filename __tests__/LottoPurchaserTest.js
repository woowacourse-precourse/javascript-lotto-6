import LottoPurchaser from '../src/LottoPurchaser.js';
import { ERROR } from '../src/Message.js';

describe('로또 구매자 클래스 테스트', () => {
  describe('ERROR.Falsy', () => {
    test('로또 구입 금액이 빈 값이면 예외가 발생한다.', () => {
      expect(() => {
        new LottoPurchaser(Number(''));
      }).toThrow(ERROR.falsy);
    });
    test('로또 구입 금액이 0이면 예외가 발생한다', () => {
      expect(() => {
        new LottoPurchaser(Number(0));
      }).toThrow(ERROR.falsy);
    });
    test('로또 구입 금액이 숫자가 아니면 예외가 발생한다', () => {
      expect(() => {
        new LottoPurchaser(Number('천원'));
      }).toThrow(ERROR.falsy);
    });
  });

  test('에러가 발생하지 않는 경우', () => {
    expect(() => new LottoPurchaser(1000)).not.toThrow();
    expect(() => new LottoPurchaser(2000)).not.toThrow();
    expect(() => new LottoPurchaser(10000)).not.toThrow();
  });
});
