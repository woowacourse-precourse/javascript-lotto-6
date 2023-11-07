import LottoShop from '../src/LottoShop.js';
import { ERROR } from '../src/LottoMessage.js';

describe('로또 판매점 클래스 테스트', () => {
  const lottoShop = new LottoShop();

  describe('ERROR.notBeDividedByThousand', () => {
    test('로또 구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
      expect(() => {
        lottoShop.sell(1);
      }).toThrow(ERROR.notBeDividedByThousand);
      expect(() => {
        lottoShop.sell(999);
      }).toThrow(ERROR.notBeDividedByThousand);
      expect(() => {
        lottoShop.sell(2001);
      }).toThrow(ERROR.notBeDividedByThousand);
    });

    test('에러가 발생하지 않는 경우', () => {
      expect(() => lottoShop.sell(1000)).not.toThrow();
      expect(() => lottoShop.sell(2000)).not.toThrow();
      expect(() => lottoShop.sell(10000)).not.toThrow();
    });
  });

  describe('로또 구입 금액에 맞게 로또가 생성되는지 확인', () => {
    test('1000을 입력하면 1개가 생성된다.', () => {
      expect(lottoShop.sell(1000)).toHaveLength(1);
    });
    test('2000을 입력하면 2개가 생성된다.', () => {
      expect(lottoShop.sell(2000)).toHaveLength(2);
    });
    test('10000을 입력하면 10개가 생성된다.', () => {
      expect(lottoShop.sell(10000)).toHaveLength(10);
    });
  });
});
