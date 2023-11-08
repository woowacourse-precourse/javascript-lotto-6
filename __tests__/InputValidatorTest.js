/* eslint-disable */
import InputValidator from '../src/utils/InputValidator.js';
import { ERROR_MESSAGE } from '../src/utils/Define.js';

describe('유저 입력 유효성 테스트', () => {
  test('purchaseAmount 성공 테스트', () => {
    // given
    const input = 3000;
    // when
    const result = InputValidator.purchaseAmount(input);
    // then
    expect(result).toEqual(true);
  });

  describe('purchaseAmount 실패 테스트', () => {
    // given
    const inputCases = [
      { input: -1, expected: ERROR_MESSAGE.invalidAmountError },
      { input: 1500, expected: ERROR_MESSAGE.invalidAmountError },
      {
        input: '천원이올시다~',
        expected: ERROR_MESSAGE.invalidAmountError,
      },

      {
        input: 'English?',
        expected: ERROR_MESSAGE.invalidAmountError,
      },
      {
        input: '?!!',
        expected: ERROR_MESSAGE.invalidAmountError,
      },
      { input: '', expected: ERROR_MESSAGE.invalidAmountError },
      { input: ' ', expected: ERROR_MESSAGE.invalidAmountError },
    ];
    // when then
    test.each(inputCases)(
      '로또 구입 금액에 $input을 입력하면 $expected 에러가 발생해야한다.',
      ({ input, expected }) => {
        expect(() => InputValidator.purchaseAmount(input)).toThrowError(
          expected,
        );
      },
    );
  });

  test('lottoNumbers 성공 테스트', () => {
    // given
    const input = '1,2,3,4,5,6';
    // when
    const result = InputValidator.lottoNumbers(input);
    // then
    expect(result).toEqual(true);
  });

  describe('lottoNumbers 실패 테스트', () => {
    // given
    const inputCases = [
      { input: '1 ', expected: ERROR_MESSAGE.invalidInputNumbers },
      { input: ',', expected: ERROR_MESSAGE.invalidInputNumbers },
      { input: ',,', expected: ERROR_MESSAGE.invalidInputNumbers },
      {
        input: '한글로 넣어도 되나요',
        expected: ERROR_MESSAGE.invalidInputNumbers,
      },
      {
        input: 'English?',
        expected: ERROR_MESSAGE.invalidInputNumbers,
      },

      {
        input: '?!!',
        expected: ERROR_MESSAGE.invalidInputNumbers,
      },
      { input: '', expected: ERROR_MESSAGE.invalidInputNumbers },
      { input: ' ', expected: ERROR_MESSAGE.invalidInputNumbers },
    ];
    // when then
    test.each(inputCases)(
      '로또 구입 금액에 $input을 입력하면 $expected 에러가 발생해야한다.',
      ({ input, expected }) => {
        expect(() => InputValidator.lottoNumbers(input)).toThrowError(expected);
      },
    );
  });

  test('bonusNumber 성공 테스트', () => {
    // given
    const input = '33';
    // when
    const result = InputValidator.bonusNumber(input);
    // then
    expect(result).toEqual(true);
  });
  describe('bonusNumber 실패 테스트', () => {
    // given
    const inputCases = [
      {
        input: '한글로 넣어도 되나요',
        expected: ERROR_MESSAGE.invalidInputBonusNumber,
      },
      {
        input: 'English?',
        expected: ERROR_MESSAGE.invalidInputBonusNumber,
      },

      {
        input: '?!!',
        expected: ERROR_MESSAGE.invalidInputBonusNumber,
      },
      { input: '', expected: ERROR_MESSAGE.invalidInputBonusNumber },
      { input: ' ', expected: ERROR_MESSAGE.invalidInputBonusNumber },
    ];
    // when then
    test.each(inputCases)(
      '로또 구입 금액에 $input을 입력하면 $expected 에러가 발생해야한다.',
      ({ input, expected }) => {
        expect(() => InputValidator.bonusNumber(input)).toThrowError(expected);
      },
    );
  });
});
