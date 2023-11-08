import { Lotto } from '../../../src/domain/index.js';

describe('Lotto 예외 테스트', () => {
  it('인스턴스 생성 시 `numbers`에 중복된 숫자가 존재할 시 에러가 발생한다.', () => {
    // given & when
    const result = () => Lotto.of([1, 1, 2, 3, 4, 5]);

    // then
    expect(result).toThrow(Lotto.ERROR_MESSAGES.duplicated);
  });

  it.each([
    { numbers: [1] },
    { numbers: [1, 2] },
    { numbers: [1, 2, 3] },
    { numbers: [1, 2, 3, 4] },
    { numbers: [1, 2, 3, 4, 5] },
    { numbers: [1, 2, 3, 4, 5, 6, 7] },
  ])('인스턴스 생성 시 `numbers`가 6개가 아닐 시 에러가 발생한다.', ({ numbers }) => {
    // given & when
    const result = () => Lotto.of(numbers);

    // then
    expect(result).toThrow(Lotto.ERROR_MESSAGES.invalidQuantity);
  });

  it.each([{ number: 1 }, { number: '1' }, { number: {} }])(
    '`match(number)` 호출 시 인자로 `LottoNumber`가 아닌 값이 들어올 시 에러가 발생한다',
    ({ number }) => {
      // given
      const lotto = Lotto.of([1, 2, 3, 4, 5, 6]);

      // when
      const result = () => lotto.match(number);

      // then
      expect(result).toThrow(Lotto.ERROR_MESSAGES.invalidMatchArg);
    },
  );

  it.each([{ number: 1 }, { number: '1' }, { number: {} }])(
    '`match(number)` 호출 시 인자로 `LottoNumber`가 아닌 값이 들어올 시 에러가 발생한다',
    ({ number }) => {
      // given
      const lotto = Lotto.of([1, 2, 3, 4, 5, 6]);

      // when
      const result = () => lotto.match(number);

      // then
      expect(result).toThrow(Lotto.ERROR_MESSAGES.invalidMatchArg);
    },
  );

  it.each([
    { input: 1 },
    { input: {} },
    { input: [] },
    { input: '1' },
    { input: true },
    { input: undefined },
  ])(
    '`prepare(lotto)` 호출 시 인자로 `Lotto`가 아닌 값이 들어올 시 에러가 발생한다.',
    ({ input }) => {
      // given
      const lotto = Lotto.of([1, 2, 3, 4, 5, 6]);

      // when
      const result = () => lotto.prepare(input);

      // then
      expect(result).toThrow(Lotto.ERROR_MESSAGES.invalidPrepareArg);
    },
  );
});
