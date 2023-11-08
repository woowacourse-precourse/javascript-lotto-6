import BonusNumber from "../src/BonusNumber";
import { LOTTO } from "../src/constants/api";
import { ERROR_MESSAGE } from "../src/constants/message"

describe('BonusNumber 테스트', () => {
  it('보너스 번호가 당첨 번호와 중복된 경우 예외가 발생한다.', () => {
    const input = {
      bonusNumber: 1,
      winningNumber: [1, 2, 3, 4, 5, 6],
    };

    expect(() => {
      new BonusNumber(input.bonusNumber, input.winningNumber);
    }).toThrow(ERROR_MESSAGE.DUPLICATE_NUMBER);
  });

  it('보너스 번호가 양의 정수가 아닌 경우 예외가 발생한다.', () => {
    const input = {
      bonusNumber: 0,
      winningNumber: [1, 2, 3, 4, 5, 6],
    };

    expect(() => {
      new BonusNumber(input.bonusNumber, input.winningNumber);
    }).toThrow(ERROR_MESSAGE.ONLY_NUMBER);
  });

  it('보너스 번호가 숫자 범위를 벗어난 경우 예외가 발생환다.', () => {
    const input = {
      bonusNumber: LOTTO.MAX_NUMBER_IN_RANGE + 1,
      winningNumber: [1, 2, 3, 4, 5, 6],
    };
    
    expect(() => {
      new BonusNumber(input.bonusNumber, input.winningNumber);
    }).toThrow(ERROR_MESSAGE.OUT_OF_RANGE(LOTTO.MIN_NUMBER_IN_RANGE, LOTTO.MAX_NUMBER_IN_RANGE));
  });

  it('보너스 번호를 반환한다.', () => {
    const input = {
      bonusNumber: 7,
      winningNumber: [1, 2, 3, 4, 5, 6],
    };

    const bonusNumber = new BonusNumber(input.bonusNumber, input.winningNumber);
    const result = bonusNumber.bonusNumber;

    expect(result).toBe(input.bonusNumber);
  })
});
