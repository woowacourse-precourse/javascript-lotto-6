import { Lotto, LottoNumber } from '../../../src/domain/index.js';

describe('Lotto 테스트', () => {
  it.each([
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(1) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(2) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(3) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(4) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(5) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(6) },
  ])(
    '`match(number)` 호출 시 `numbers`에 해당 인자를 보유시 true를 반환한다.',
    ({ numbers, number }) => {
      // given
      const lotto = Lotto.of(numbers);

      // when
      const result = lotto.match(number);

      // then
      expect(result).toBeTruthy();
    },
  );
  it.each([
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(7) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(8) },
  ])(
    '`match(number)` 호출 시 `numbers`에 해당 인자를 보유하지 않을시 false를 반환한다.',
    ({ numbers, number }) => {
      // given
      const lotto = Lotto.of(numbers);

      // when
      const result = lotto.match(number);

      // then
      expect(result).toBeFalsy();
    },
  );
});
