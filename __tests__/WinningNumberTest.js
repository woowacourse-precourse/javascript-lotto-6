import WinningNumber from '../src/models/WinnigNumber';

describe('당첨 번호 클래스 테스트', () => {
  test('당첨 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('1, 2, 3, 4, 5, 6, 7');
    }).toThrow('[ERROR] 당첨 번호는 6개여야 합니다.');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('1,1,2,3,4,5');
    }).toThrow('[ERROR] 당첨 번호는 중복될 수 없습니다.');
  });

  test('당첨 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('1,2,3,4,5.5,40');
    }).toThrow('[ERROR] 당첨 번호는 정수 이여야 합니다.');
  });

  test('당첨 번호가 0으로 시작하는 숫자이면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('01,02,03,10,15,16');
    }).toThrow('[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.');
  });

  test('당첨 번호가 1~45 사이가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('1,2,3,4,5,46');
    }).toThrow('[ERROR] 당첨 번호는 1~45 사이의 수 이여야 합니다.');
  });
});
