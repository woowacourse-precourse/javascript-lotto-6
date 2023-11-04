import { Lotto, LottoNumber, WinningLotto } from '../../../src/domain/index.js';

describe('WinningLotto 테스트', () => {
  it.each([
    { winningNumbers: [1, 2, 3, 4, 5, 6], numbers: [1, 2, 3, 4, 5, 6], matched: 6 },
    { winningNumbers: [11, 22, 33, 44, 5, 6], numbers: [1, 2, 3, 4, 5, 6], matched: 2 },
    { winningNumbers: [13, 15, 14, 18, 26, 7], numbers: [1, 13, 3, 7, 14, 6], matched: 3 },
    { winningNumbers: [1, 2, 3, 4, 5, 6], numbers: [11, 22, 33, 44, 7, 9], matched: 0 },
  ])(
    '`prepare(lotto)` 호출 시 `lotto`와 우승 로또가 몇 개의 숫자가 같은지 확인한다.',
    ({ winningNumbers, numbers, matched }) => {
      // given
      const bonus = LottoNumber.valueOf(38);
      const winningLotto = WinningLotto.of(Lotto.of(winningNumbers), bonus);
      const lotto = Lotto.of(numbers);

      // when
      const result = winningLotto.prepare(lotto);

      // then
      expect(result).toBe(matched);
    },
  );

  it.each([
    { numbers: [1, 2, 3, 4, 5, 6], bonusNumber: 3 },
    { numbers: [11, 22, 33, 44, 5, 6], bonusNumber: 22 },
  ])(
    '입력받은 bonus를 WinningLotto의 lotto가 소유하지 않았을시 false를 반환합니다.',
    ({ numbers, bonusNumber }) => {
      // given
      const lotto = Lotto.of(numbers);
      const bonus = LottoNumber.valueOf(bonusNumber);
      const winningLotto = WinningLotto.of(Lotto.of([1, 2, 3, 4, 5, 6]), bonus);

      // when
      const result = winningLotto.hasBonus(lotto);

      // then
      expect(result).toBeTruthy();
    },
  );

  it.each([
    { numbers: [1, 2, 3, 4, 5, 6], bonusNumber: 8 },
    { numbers: [11, 22, 33, 44, 5, 6], bonusNumber: 7 },
  ])(
    '입력받은 bonus를 WinningLotto의 lotto가 소유하지 않았을시 false를 반환합니다.',
    ({ numbers, bonusNumber }) => {
      // given
      const lotto = Lotto.of(numbers);
      const bonus = LottoNumber.valueOf(bonusNumber);
      const winningLotto = WinningLotto.of(Lotto.of([1, 2, 3, 4, 5, 6]), bonus);

      // when
      const result = winningLotto.hasBonus(lotto);

      // then
      expect(result).toBeFalsy();
    },
  );
});
