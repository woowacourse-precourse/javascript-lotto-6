import { Lotto, LottoNumber, WinningLotto } from '../../../src/domain/index.js';

describe('WinningLotto 테스트', () => {
  it.each([
    {
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      lottoNumbers: [1, 2, 3, 4, 5, 6],
      result: { match: 6, hasBonus: false },
    },
    {
      winningNumbers: [11, 22, 33, 44, 5, 6],
      bonusNumber: 2,
      lottoNumbers: [1, 2, 3, 4, 5, 6],
      result: { match: 2, hasBonus: true },
    },
    {
      winningNumbers: [13, 15, 14, 18, 26, 7],
      bonusNumber: 8,
      lottoNumbers: [1, 13, 3, 7, 14, 6],
      result: { match: 3, hasBonus: false },
    },
    {
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 8,
      lottoNumbers: [11, 22, 33, 44, 7, 9],
      result: { match: 0, hasBonus: false },
    },
  ])(
    '`grade(lotto)` 호출 시 `lotto`와 우승 로또가 몇 개의 숫자가 같은지와 보너스 소유 여부를 확인한다.',

    // eslint-disable-next-line object-curly-newline
    ({ winningNumbers, bonusNumber, lottoNumbers, result }) => {
      // given
      const bonus = LottoNumber.valueOf(bonusNumber);
      const winningLotto = WinningLotto.of(Lotto.of(winningNumbers), bonus);
      const lotto = Lotto.of(lottoNumbers);

      // when
      const graded = winningLotto.grade(lotto);

      // then
      expect(graded).toEqual(result);
    },
  );
});
