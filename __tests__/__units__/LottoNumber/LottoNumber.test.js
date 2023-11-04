import { LottoNumber } from '../../../src/domain/index.js';

describe('LottoNumber 테스트', () => {
  it.each([{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }])(
    '`equal(number)` 호출 시 같은 인스턴스인지 비교한다.',
    ({ number }) => {
      // given
      const lottoNumber = LottoNumber.valueOf(number);

      // when
      const result = lottoNumber.equal(LottoNumber.valueOf(number));

      // then
      expect(result).toBeTruthy();
    },
  );

  it.each([
    { number: 1, otherNumber: 5 },
    { number: 2, otherNumber: 5 },
    { number: 3, otherNumber: 5 },
    { number: 4, otherNumber: 5 },
  ])('`equal(number)` 호출 시 다른 인스턴스인지 비교한다.', ({ number, otherNumber }) => {
    // given
    const lottoNumber = LottoNumber.valueOf(number);

    // when
    const result = lottoNumber.equal(LottoNumber.valueOf(otherNumber));

    // then
    expect(result).toBeFalsy();
  });
});
