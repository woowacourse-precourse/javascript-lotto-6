import getBonusNumber from '../../src/service/getBonusNumber';
import { BONUS_ERROR_CODE, LOTTO_ERROR_CODE, PURCHASE_ERROR_CODE } from '../../src/util/error/errorCode';

describe('보너스 번호 입력 테스트', () => {
  const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];

  test('입력값이 숫자가 아닐 경우 해당 에러를 발생', async () => {
    // given
    const notNumberInput = 'asdf';

    // when
    try {
      const bonusNumber = await getBonusNumber(notNumberInput, WINNING_NUMBER);
    } catch (error) {
      expect(error.message).toBe(`${PURCHASE_ERROR_CODE.valueIsNaN}`);
    }
  });

  test('입력값이 정수가 아닐 경우 해당 에러를 발생', async () => {
    // given
    const decimalInput = '1.5';

    // when
    try {
      const bonusNumber = await getBonusNumber(decimalInput, WINNING_NUMBER);
    } catch (error) {
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsNotInteger}`);
    }
  });

  test('입력값이 1 ~ 45 사이의 값이 아닌 경우 해당 에러를 발생', async () => {
    // given
    const outOfMaxRange = '46';
    const outOfMixRange = '-1';

    // when
    try {
      const bonusNumber = await getBonusNumber(outOfMaxRange, WINNING_NUMBER);
    } catch (error) {
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsOutOfRange}`);
    }

    try {
      const bonusNumber = await getBonusNumber(outOfMixRange, WINNING_NUMBER);
    } catch (error) {
      expect(error.message).toBe(`${LOTTO_ERROR_CODE.valueIsOutOfRange}`);
    }
  });

  test('입력값이 당첨번호와 중복되는 경우 해당 에러를 발생', async () => {
    // given
    const duplicateInput = '6';

    // when
    try {
      await getBonusNumber(duplicateInput, WINNING_NUMBER);
    } catch (error) {
      console.log(error);
      expect(error.message).toBe(`${BONUS_ERROR_CODE.valueMatchesLotto}`);
    }
  });

  test('입력값이 유효한 값일 경우 해당 값을 반환', async () => {
    // given
    const validInput = '45';
    const expectedReturn = 45;

    const result = await getBonusNumber(validInput, WINNING_NUMBER);

    // when

    expect(result).toBe(expectedReturn);
  });
});
