import bonusNumberValidService from '../../src/service/validate/bonusNumberValidService';
import { BONUS_ERROR_CODE, LOTTO_ERROR_CODE, PURCHASE_ERROR_CODE } from '../../src/util/error/errorCode';

describe('보너스 번호 입력에 대한 유효성 테스트', () => {
  const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];

  test('입력값이 빈값일 경우 에러를 발생', async () => {
    // given
    const emptyInput = '';

    // then
    try {
      await bonusNumberValidService(emptyInput, WINNING_NUMBERS);
    } catch (error) {
      expect(error.message).toBe(`${PURCHASE_ERROR_CODE.valueIsEmpty}`);
    }
  });

  test('입력값이 숫자가 아닐 경우 에러를 발생', async () => {
    // given
    const inValidInput = 'asdf';

    // then
    try {
      await bonusNumberValidService(inValidInput, WINNING_NUMBERS);
    } catch (error) {
      expect(error.message).toBe(`${PURCHASE_ERROR_CODE.valueIsNaN}`);
    }
  });

  test('입력값이 정수가 아닐 경우 에러를 발생', async () => {
    // given
    const decimalInput = 1.5;

    // then
    try {
      await bonusNumberValidService(decimalInput, WINNING_NUMBERS);
    } catch (error) {
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsNotInteger}`);
    }
  });

  test('입력값이 1 ~ 45 사이의 값이 아닐 경우 에러를 발생', async () => {
    // given
    const smallInput = 0;
    const minusInput = -45;
    const bigInput = 46;

    // then
    try {
      await bonusNumberValidService(smallInput, WINNING_NUMBERS);
    } catch (error) {
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsOutOfRange}`);
    }

    try {
      await bonusNumberValidService(minusInput, WINNING_NUMBERS);
    } catch (error) {
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsOutOfRange}`);
    }

    try {
      await bonusNumberValidService(bigInput, WINNING_NUMBERS);
    } catch (error) {
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsOutOfRange}`);
    }
  });

  test('입력값이 당첨 번호에 포함된 값일 경우 에러를 발생', async () => {
    // given
    const includedInput = 1;
    const uniqueInput = 45;
    // then
    try {
      await bonusNumberValidService(includedInput, WINNING_NUMBERS);
    } catch (error) {
      expect(error.message).toBe(`${BONUS_ERROR_CODE.valueMatchesLotto}`);
    }

    await expect(() => bonusNumberValidService(uniqueInput, WINNING_NUMBERS)).not.toThrow();
  });
});
