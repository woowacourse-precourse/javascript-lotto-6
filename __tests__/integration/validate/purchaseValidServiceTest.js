import purchaseValidService from '../../../src/service/validate/purchaseValidService';
import { PURCHASE_ERROR_CODE } from '../../../src/util/error/errorCode';

describe('로또 구입 금액 입력에 대한 유효성 테스트', () => {
  test('1000으로 나누어 떨어지지 않는 값에 대한 에러 테스트', async () => {
    // given
    const undivisibleInput = 10001;

    // then
    try {
      await purchaseValidService(undivisibleInput);
    } catch (error) {
      expect(error.message).toBe(`${PURCHASE_ERROR_CODE.hasRemainder}`);
    }
  });

  test('입력값이 숫자가 아닌 경우에 대한 에러 테스트', async () => {
    // given
    const notNumberInput = 'a';

    try {
      await purchaseValidService(notNumberInput);
    } catch (error) {
      expect(error.message).toBe(`${PURCHASE_ERROR_CODE.valueIsNaN}`);
    }
  });

  test('입력값이 빈값에 대한 에러 테스트', async () => {
    // given
    const emptyInput = '';

    try {
      await purchaseValidService(emptyInput);
    } catch (error) {
      expect(error.message).toBe(`${PURCHASE_ERROR_CODE.valueIsEmpty}`);
    }
  });
});
