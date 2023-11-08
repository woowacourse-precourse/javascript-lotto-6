import ERROR from '../../src/constant/Error.js';
import LOTTO from '../../src/constant/Lotto.js';
import Money from '../../src/domain/Money.js';

describe('돈 클래스 테스트', () => {
  test(`${LOTTO.minMoney} ~ ${LOTTO.maxMoney} 사이의 값이 아니면 예외가 발생한다.`, () => {
    expect(() => {
      new Money(LOTTO.minMoney-1)
    }).toThrow(ERROR.moneyRange); // 돈 범위 오류를 명확하게 체크

    expect(() => {
      new Money(LOTTO.maxMoney+1)
    }).toThrow(ERROR.moneyRange);
  });

  test('돈에 숫자가 아닌 값이 들어오면 예외가 발생한다.', () => {
    expect(() => {
      new Money('빢세')
    }).toThrow(ERROR.isNan); // 돈 범위 오류를 명확하게 체크
  });

  test(`돈이 ${LOTTO.price}단위가 아니면 예외가 발생한다.`, () => {
    expect(() => {
      new Money(1324)
    }).toThrow(ERROR.price); // 돈 범위 오류를 명확하게 체크
  });

  test(`돈이 음수면 예외가 발생한다.`, () => {
    expect(() => {
      new Money(-324)
    }).toThrow(ERROR.negativeMoney); // 돈 범위 오류를 명확하게 체크
  });
});
