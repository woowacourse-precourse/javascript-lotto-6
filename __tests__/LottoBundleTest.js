import { CONSTANT, ERROR } from '../src/constants/Constant.js';
import LottoBundle from '../src/model/LottoBundle.js';

describe('로또 번들(구매 금액) 검증 테스트', () => {
  test.each([['yuna'], ['!'], ['']])('금액이 숫자가 아니면 예외가 발생한다.', (input) => {
    // when & then
    expect(() => {
      new LottoBundle(input);
    }).toThrow(ERROR.isNotNumber);
  });

  test.each([[-1], [0], ['-3.02']])('금액이 양수가 아니면 예외가 발생한다.', (input) => {
    // when & then
    expect(() => {
      new LottoBundle(input);
    }).toThrow(ERROR.isNotPositive);
  });

  test.each([[1200], [1000.01], [222], ['3500']])(
    `금액이 ${CONSTANT.amountUnit}원 단위가 아니면 예외가 발생한다.`,
    (input) => {
      // when & then
      expect(() => {
        new LottoBundle(input);
      }).toThrow(ERROR.isNotInAmountUnit);
    },
  );

  test.each([[1000], [30000.0], ['25000']])(
    `금액이 ${CONSTANT.amountUnit}원 단위의 양수이면 예외가 발생하지 않는다.`,
    (input) => {
      // when & then
      expect(() => {
        new LottoBundle(input);
      }).not.toThrow();
    },
  );
});
