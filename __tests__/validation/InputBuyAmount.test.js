import { isValidBuyAmount } from '../../src/utils/Validation.js';

describe('구입 기능', () => {
  describe('예외 처리', () => {
    it('구입 금액이 1000원 단위가 아닐 경우.', () => {
      // given
      const buyAmount = [100, 1200, 7777, 14400];

      // then
      buyAmount.forEach((amount) => {
        expect(() => isValidBuyAmount(amount)).toThrow('[ERROR] 1000원 단위로 입력해 주세요.');
      });
    });

    it('구입 금액이 숫자가 아닐 경우.', () => {
      // given
      const buyAmount = ['1000원', '1,000', '천원', ''];

      // then
      buyAmount.forEach((amount) => {
        expect(() => isValidBuyAmount(amount)).toThrow('[ERROR] 숫자를 입력해 주세요.');
      });
    });
  });
});
