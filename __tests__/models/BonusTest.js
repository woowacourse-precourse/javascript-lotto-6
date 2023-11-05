import { ERROR_MESSAGES } from '../../src/constants/messages.js';
import Bonus from '../../src/model/Bonus.js';

describe('Bonus 모델 테스트', () => {
  let winningNumbers;

  beforeEach(() => {
    winningNumbers = [1, 2, 3, 4, 5, 6];
  });

  test('Bonus 인스턴스 테스트', () => {
    const bonusNumber = 7;
    const bonusInstance = new Bonus(bonusNumber, winningNumbers);

    expect(bonusInstance).toBeInstanceOf(Bonus);
  });

  test('getBonusNumber() 테스트', () => {
    const readInput = '7';
    const bonusNumber = new Bonus(readInput, winningNumbers).getBonusNumber();

    expect(bonusNumber).toEqual(7);
  });

  test('당첨 번호와 중복되는 보너스 번호 예외 테스트', () => {
    const bonusNumber = 6;

    expect(() => new Bonus(bonusNumber, winningNumbers)).toThrow(
      ERROR_MESSAGES.invalidBonusNumber,
    );
  });

  test('1~45 이외 보너스 번호 입력 예외 테스트', () => {
    const bonusNumber = '1000';

    expect(() => {
      new Bonus(bonusNumber, winningNumbers);
    }).toThrow(ERROR_MESSAGES.invalidNumberRange);
  });
});
