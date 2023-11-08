import WinningNumber from '../src/models/WinningNumber.js';

describe('당첨번호 클래스 테스트', () => {
  test('당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber([1, 2, 3, 4, 5, 'a']);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 1~45 범위를 벗어난 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber([3, 46, 1, 24, 33, 15]);
    }).toThrow('[ERROR]');
  });

  test('보너스 당첨 번호에 기존 당첨 번호와 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      const test = new WinningNumber([1, 2, 3, 4, 5, 6]);
      test.setBonusNumber(2);
    }).toThrow('[ERROR]');
  });

  test('보너스 당첨 번호에 1~45 범위를 벗어난 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      const test = new WinningNumber([1, 2, 3, 4, 5, 6]);
      test.setBonusNumber(47);
    }).toThrow('[ERROR]');
  });

  test('보너스 당첨 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      const test = new WinningNumber([1, 2, 3, 4, 5, 6]);
      test.setBonusNumber('s');
    }).toThrow('[ERROR]');
  });
});
