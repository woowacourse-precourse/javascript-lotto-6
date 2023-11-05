import { LottoStore } from '../src/LottoStore.js';
import { Message } from '../src/Message.js';

describe('LottoStore 테스트', () => {
  let lottoStore;

  beforeEach(() => {
    lottoStore = new LottoStore();
  });

  describe('isValidMoney함수 테스트', () => {
    it('입력값이 숫자가 아닐때', () => {
      const input = 'not_a_number';
      expect(() => lottoStore.isValidMoney(input)).toThrowError(
        Message.error.NOT_NUMBER
      );
    });

    it('입력값이 1000으로 나눠떨어지지 않을때', () => {
      const input = 2500;
      expect(() => lottoStore.isValidMoney(input)).toThrowError(
        Message.error.NOT_ONETHOUSAND
      );
    });

    it('입력값이 1000으로 나눠떨어질때', () => {
      const input = 3000;
      expect(lottoStore.isValidMoney(input)).toBe(true);
    });

    it('구매금액이 0일때', () => {
      const input = 0;
      expect(() => lottoStore.isValidMoney(input)).toThrowError(
        Message.error.NOT_ONETHOUSAND
      );
    });
  });

  describe('purchaseLotto함수 테스트', () => {
    it('입력된 돈으로 제대로 로또의 개수를 반환하는지', () => {
      const inputMoney = 5000;
      const pricePerLotto = lottoStore.pricerLotto;
      const expectedNumberOfLottos = inputMoney / pricePerLotto;
      expect(lottoStore.purchaseLotto(inputMoney)).toBe(expectedNumberOfLottos);
    });
  });
});

export default LottoStore;
