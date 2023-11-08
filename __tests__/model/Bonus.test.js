import Bonus from '../../src/Bonus.js';
import Lotto from '../../src/Lotto.js';
import { ERROR_MESSAGE, ERROR_MESSAGE_FUNCTION } from '../../src/constants/Messages.js';

// isDuplicatedWinningNumbers를 항상 false를 반환하도록 모킹
const alwaysFalseMock = {
  isDuplicatedWinningNumbers: jest.fn().mockReturnValue(false),
};

describe('Bonus 클래스', () => {
  test('유효한 보너스 번호로 Bonus 인스턴스를 생성해야 합니다', () => {
    const bonus = Bonus.of('5', alwaysFalseMock);
    expect(bonus).toBeInstanceOf(Bonus);
  });

  test('보너스 번호가 숫자가 아닌 경우 예외를 발생시켜야 합니다.', () => {
    expect(() => Bonus.of('5f', alwaysFalseMock)).toThrow(ERROR_MESSAGE.number);
  });

  test('보너스 번호가 정수가 아닌 경우 예외를 발생시켜야 합니다.', () => {
    expect(() => Bonus.of('5.5', alwaysFalseMock)).toThrow(ERROR_MESSAGE.integer);
  });

  test('보너스 번호가 유효한 범위에 속하지 않는 경우 예외를 발생시켜야 합니다.', () => {
    expect(() => Bonus.of('50', alwaysFalseMock)).toThrow(ERROR_MESSAGE_FUNCTION.validScope());
  });

  test('보너스 번호가 당첨번호와 중복되는 숫자라면 예외를 발생시켜야 합니다.', () => {
    const winningNumbers = Lotto.of([11, 12, 13, 14, 15, 16]);

    expect(() => Bonus.of('16', winningNumbers)).toThrow(ERROR_MESSAGE.winningDuplication);
  });
});
