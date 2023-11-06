import { LottoMachine } from '../../../src/domain/index.js';

import DUMMY_INPUTS from '../../constants/dummy.js';

describe('LottoNumber 예외 테스트', () => {
  /**
   * @type {LottoMachine}
   */
  let lottoMachine;

  beforeEach(() => {
    // given
    lottoMachine = LottoMachine.of();
  });

  it.each(DUMMY_INPUTS.withoutNumber)(
    '`buy(money)` 호출 시 인자로 숫자가 아닌 값이 들어올 시 에러가 발생한다.',
    ({ input: money }) => {
      // when
      const result = () => lottoMachine.buy(money);

      // then
      expect(result).toThrow(LottoMachine.ERROR_MESSAGES.notNumberMoney);
    },
  );

  it.each([{ money: 900 }, { money: 0 }, { money: -1_000 }])(
    `buy(money) 호출 시 ${LottoMachine.LOTTO_PRICE} 이하의 값이 들어올 시 에러가 발생한다.`,
    ({ money }) => {
      // when
      const result = () => lottoMachine.buy(money);

      // then
      expect(result).toThrow(LottoMachine.ERROR_MESSAGES.insufficientMoney);
    },
  );

  it.each([{ money: 1_001 }, { money: 1_010 }, { money: 1_100 }])(
    `buy(money) 호출 시 ${LottoMachine.LOTTO_PRICE}로 나누어 떨어지지 않는 값이 들어올 시 에러가 발생한다.`,
    ({ money }) => {
      // when
      const result = () => lottoMachine.buy(money);

      // then
      expect(result).toThrow(LottoMachine.ERROR_MESSAGES.indivisible);
    },
  );
});
