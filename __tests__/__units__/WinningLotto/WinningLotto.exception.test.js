import { Lotto, LottoNumber, WinningLotto } from '../../../src/domain/index.js';

describe('WinningLotto 예외 테스트', () => {
  it.each([
    { input: 1 },
    { input: {} },
    { input: [] },
    { input: '1' },
    { input: true },
    { input: undefined },
  ])('인스턴스 생성 시 `lotto`에 `Lotto`가 아닌 값이 입력될 시 에러가 발생한다.', ({ input }) => {
    // given & when
    const result = () => WinningLotto.of(input, LottoNumber.valueOf(1));

    // then
    expect(result).toThrow(WinningLotto.ERROR_MESSAGES.invalidLottoArg);
  });

  it.each([
    { input: 1 },
    { input: {} },
    { input: [] },
    { input: '1' },
    { input: true },
    { input: undefined },
  ])(
    '인스턴스 생성 시 `bonus`에 `LottoNumber`가 아닌 값이 입력될 시 에러가 발생한다.',
    ({ input }) => {
      // given & when
      const result = () => WinningLotto.of(Lotto.of([1, 2, 3, 4, 5, 6]), input);

      // then
      expect(result).toThrow(WinningLotto.ERROR_MESSAGES.invalidBonusArg);
    },
  );

  it.each([
    { lotto: [1, 2, 3, 4, 5, 6], bonus: 1 },
    { lotto: [1, 2, 3, 4, 5, 6], bonus: 2 },
    { lotto: [1, 2, 3, 4, 5, 6], bonus: 3 },
    { lotto: [1, 2, 3, 4, 5, 6], bonus: 4 },
    { lotto: [1, 2, 3, 4, 5, 6], bonus: 5 },
    { lotto: [1, 2, 3, 4, 5, 6], bonus: 6 },
  ])('인스턴스 생성 시 `bonus`가 `lotto`에 이미 존재할 시 에러가 발생한다.', ({ lotto, bonus }) => {
    // given & when
    const result = () => WinningLotto.of(Lotto.of(lotto), LottoNumber.valueOf(bonus));

    // then
    expect(result).toThrow(WinningLotto.ERROR_MESSAGES.existBonus);
  });

  it.each([
    { input: 1 },
    { input: {} },
    { input: [] },
    { input: '1' },
    { input: true },
    { input: undefined },
  ])(
    '`grade(lotto)` 호출 시 인자로 `Lotto`가 아닌 값이 들어올 시 에러가 발생한다.',
    ({ input }) => {
      // given
      const winningLotto = WinningLotto.of(Lotto.of([1, 2, 3, 4, 5, 6]), LottoNumber.valueOf(7));

      // when
      const result = () => winningLotto.grade(input);

      // then
      expect(result).toThrow(WinningLotto.ERROR_MESSAGES.invalidGradeArg);
    },
  );
});
