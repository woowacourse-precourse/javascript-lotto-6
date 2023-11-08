// eslint-disable-next-line object-curly-newline
import { LottoNumber, LottoRewards, WinningLotto, Lotto } from '../../../src/domain/index.js';

import DUMMY_INPUTS from '../../constants/dummy.js';

describe('LottoRewards 예외 테스트', () => {
  it.each(DUMMY_INPUTS.withoutArray)(
    '`getLottosResult(lottos)` 호출 시 인자로 배열이 아닌 값이 존재할 시 에러가 발생한다.',
    ({ input }) => {
      // given
      const winningLotto = WinningLotto.of(Lotto.of([1, 2, 3, 4, 5, 6]), LottoNumber.valueOf(7));
      const rewards = LottoRewards.of(winningLotto);

      // when
      const result = () => rewards.getLottosResult(input);

      // then
      expect(result).toThrow(LottoRewards.ERROR_MESSAGES.notLottoArray);
    },
  );

  it('`getLottosResult(lottos)` 호출 시 인자로 `Lotto`가 아닌 값이 존재할 시 에러가 발생한다.', () => {
    // given
    const winningLotto = WinningLotto.of(Lotto.of([1, 2, 3, 4, 5, 6]), LottoNumber.valueOf(7));
    const rewards = LottoRewards.of(winningLotto);

    // when
    const result = () => rewards.getLottosResult([Lotto.of([1, 2, 3, 4, 5, 6]), 1, 2]);

    // then
    expect(result).toThrow(LottoRewards.ERROR_MESSAGES.notLottoInstance);
  });
});
