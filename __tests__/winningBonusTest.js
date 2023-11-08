import WinningBonus from '../src/WinningBonus';

describe('WinningBonus 클래스 테스트', () => {
  const winningBonus = new WinningBonus();
  test('보너스 번호가 숫자가 아니면 예외 처리한다.', () => {
    expect(() => {
      winningBonus.validate('1,2,3,4,5,6', '한글');
    }).toThrow('[ERROR] 보너스 번호는 숫자로 입력해주세요.');
  });

  test('보너스 번호가 정수가 아니면 예외 처리한다.', () => {
    expect(() => {
      winningBonus.validate('1,2,3,4,5,6', 28.1);
    }).toThrow('[ERROR] 보너스 번호는 정수로 입력해주세요.');
  });

  test('보너스 번호가 1부터 45 사이의 숫자가 아니면 예외 처리한다.', () => {
    expect(() => {
      winningBonus.validate('1,2,3,4,5,6', 46);
    }).toThrow('[ERROR] 보너스 번호는 1부터 45 사이의 숫자로 입력해주세요.');
  });

  test('보너스 번호가 1부터 45 사이의 숫자가 아니면 예외 처리한다.', () => {
    expect(() => {
      winningBonus.validate('1,2,3,4,5,6', 0);
    }).toThrow('[ERROR] 보너스 번호는 1부터 45 사이의 숫자로 입력해주세요.');
  });

  test('당첨 번호와 보너스 번호가 중복된 숫자가 있으면 예외 처리한다.', () => {
    expect(() => {
      winningBonus.validate('1,8,24,32,40,45', 8);
    }).toThrow(
      '[ERROR] 보너스 번호와 당첨 번호 간 중복된 숫자 없이 입력해주세요.',
    );
  });
});
