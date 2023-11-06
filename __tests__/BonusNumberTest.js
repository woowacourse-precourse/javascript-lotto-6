import BonusNumber from '../src/models/BonusNumber.js';

describe('보너스 번호 클래스 테스트', () => {
  const winningNumber = [1, 2, 3, 4, 5, 6];

  test('보너스 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(winningNumber, '10.5');
    }).toThrow('[ERROR] 보너스 번호는 정수 이여야 합니다.');
  });

  test('보너스 번호가 0으로 시작하는 숫자이면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(winningNumber, '07');
    }).toThrow('[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.');
  });

  test('보너스 번호가 1~45 사이가 아니면 예외가 발생한다. ', () => {
    expect(() => {
      new BonusNumber(winningNumber, '47');
    }).toThrow('[ERROR] 보너스 번호는 1~45 사이의 수 이여야 합니다.');
  });

  test('보너스 번호와 당첨 번호가 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(winningNumber, '6');
    }).toThrow('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  });
});
