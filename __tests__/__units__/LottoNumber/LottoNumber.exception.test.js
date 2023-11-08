import { LottoNumber } from '../../../src/domain/index.js';

import DUMMY_INPUTS from '../../constants/dummy.js';

describe('LottoNumber 예외 테스트', () => {
  it.each(DUMMY_INPUTS.withoutNumber)(
    '인스턴스 생성 시 `number`에 숫자가 아닌 값이 입력되면 에러가 발생한다.',
    ({ input: number }) => {
      // given & when
      const result = () => LottoNumber.valueOf(number);

      // then
      expect(result).toThrow(LottoNumber.ERROR_MESSAGES.notNumber);
    },
  );

  it('인스턴스 생성 시 `number`에 정수가 아닌 값이 입력되면 에러가 발생한다.', () => {
    // given & when
    const result = () => LottoNumber.valueOf(LottoNumber.MIN_NUMBER + 0.1);

    // then
    expect(result).toThrow(LottoNumber.ERROR_MESSAGES.notInteger);
  });

  it.each([{ number: LottoNumber.MIN_NUMBER - 1 }, { number: LottoNumber.MAX_NUMBER + 1 }])(
    '인스턴스 생성 시 `number`에 범위 외 숫자가 입력되면 에러가 발생한다.',
    ({ number }) => {
      // given & when
      const result = () => LottoNumber.valueOf(number);

      // then
      expect(result).toThrow(LottoNumber.ERROR_MESSAGES.outOfRange);
    },
  );
});
