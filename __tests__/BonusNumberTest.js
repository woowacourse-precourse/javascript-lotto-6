import BonusNumber from '../src/models/BonusNumber.js';

describe('보너스 번호 클래스 테스트', () => {
  const winningNumber = [1, 2, 3, 4, 5, 6];

  test.each(['^', 'six', '6.1'])(
    '보너스 번호가 정수가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new BonusNumber(winningNumber, input);
      }).toThrow('특수문자, 영문자, 소수');
    }
  );

  test('보너스 번호가 0으로 시작하는 숫자이면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(winningNumber, '07');
    }).toThrow('0으로 시작하는 숫자');
  });

  test('보너스 번호가 1~45 사이가 아니면 예외가 발생한다. ', () => {
    expect(() => {
      new BonusNumber(winningNumber, '47');
    }).toThrow('사이의 수');
  });

  test('보너스 번호와 당첨 번호가 중복되면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(winningNumber, '6');
    }).toThrow('중복');
  });
});
