import Lottoshop from '../src/Lottoshop.js';
import { ERROR } from '../src/LottoMessage.js';
import LottoPurchaser from '../src/LottoPurchaser.js';

describe('로또 판매점 클래스 테스트', () => {
  const lottoPurchaser = new LottoPurchaser();

  describe('예외 관련 테스트', () => {
    describe('ERROR.positiveNumber', () => {
      test('로또 구입 금액이 빈 값이면 예외가 발생한다.', () => {
        expect(() => {
          Lottoshop.sellTo(lottoPurchaser, Number(''));
        }).toThrow(ERROR.positiveNumber);
      });
      test('로또 구입 금액이 0이면 예외가 발생한다', () => {
        expect(() => {
          Lottoshop.sellTo(lottoPurchaser, Number(0));
        }).toThrow(ERROR.positiveNumber);
      });
      test('로또 구입 금액이 숫자가 아니면 예외가 발생한다', () => {
        expect(() => {
          Lottoshop.sellTo(lottoPurchaser, Number('천원'));
        }).toThrow(ERROR.positiveNumber);
      });
    });

    describe('ERROR.canDividedByPrice', () => {
      test('로또 구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
        expect(() => {
          Lottoshop.sellTo(lottoPurchaser, 1);
        }).toThrow(ERROR.canDividedByPrice);
        expect(() => {
          Lottoshop.sellTo(lottoPurchaser, 999);
        }).toThrow(ERROR.canDividedByPrice);
        expect(() => {
          Lottoshop.sellTo(lottoPurchaser, 2001);
        }).toThrow(ERROR.canDividedByPrice);
      });
    });

    test('에러가 발생하지 않는 경우', () => {
      expect(() => Lottoshop.sellTo(lottoPurchaser, 1000)).not.toThrow();
      expect(() => Lottoshop.sellTo(lottoPurchaser, 2000)).not.toThrow();
      expect(() => Lottoshop.sellTo(lottoPurchaser, 10000)).not.toThrow();
    });
  });
});
