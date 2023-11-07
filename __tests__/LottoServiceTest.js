/* eslint-disable */
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/utils/Define';
import LottoService from '../src/LottoService';

describe('로또 구입 금액 유효성 테스트', () => {
  // given
  const inputCases = [
    { input: -1, expected: ERROR_MESSAGE.invalidAmountError },
    { input: 1500, expected: ERROR_MESSAGE.invalidAmountError },
    {
      input: '천원이올시다~',
      expected: ERROR_MESSAGE.invalidAmountError,
    },
    { input: '', expected: ERROR_MESSAGE.invalidAmountError },
    { input: ' ', expected: ERROR_MESSAGE.invalidAmountError },
  ];
  const lottoService = new LottoService();
  // when then
  test.each(inputCases)(
    '로또 구입 금액에 $input을 입력하면 $expected 에러가 발생해야한다.',
    ({ input, expected }) => {
      expect(() => lottoService.validatePurchaseAmount(input)).toThrowError(
        expected,
      );
    },
  );
});

describe('로또 생성 테스트', () => {
  // given
  const lottoService = new LottoService();
  const addCases = [
    { input: 3000, expected: 2 },
    { input: 1000, expected: 1 },
  ];
  test.each(addCases)(
    '구입 금액이 $input이라면, 로또 개수는 $expected 개가 되어야 한다.',
    ({ input, expected }) => {
      // when
      const lottoCount = lottoService.sellLotto(input).length;
      // then
      expect(lottoCount).toEqual(expected);
    },
  );
});
