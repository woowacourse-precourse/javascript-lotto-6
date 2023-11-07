/* eslint-disable */
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/utils/Define';
import LottoService from '../src/LottoService';

describe('로또 구입 금액 입력', () => {
  // given
  const inputCases = [
    { input: -1, expected: ERROR_MESSAGE.invalidAmountError },
    { input: 1500, expected: ERROR_MESSAGE.invalidAmountError },
    {
      input: '천오백원이올시다~',
      expected: ERROR_MESSAGE.invalidAmountError,
    },
    { input: '', expected: ERROR_MESSAGE.invalidAmountError },
    { input: ' ', expected: ERROR_MESSAGE.invalidAmountError },
  ];
  // when
  const lottoService = new LottoService();

  test.each(inputCases)(
    '로또 구입 금액에 $input을 입력하면 $expected 에러가 발생해야한다.',
    ({ input, expected }) => {
      expect(() => lottoService.validatePurchaseAmount(input)).toThrowError(
        expected,
      );
    },
  );
});
