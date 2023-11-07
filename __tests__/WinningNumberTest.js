import WinningNumber from '../src/models/WinnigNumber';

describe('당첨 번호 클래스 테스트', () => {
  test.each(['1,2,3,4,5', '1,2,3,4,5,6,7'])(
    '당첨 번호의 개수가 6개가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new WinningNumber(input);
      }).toThrow('6개');
    }
  );

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('1,1,2,3,4,5');
    }).toThrow('중복');
  });

  test.each(['1,2,3,4,5,six', '1,2,3,4,5,^', '1,2,3,4,5,6.1'])(
    '당첨 번호가 정수가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new WinningNumber(input);
      }).toThrow('특수문자, 영문자, 소수');
    }
  );

  test('당첨 번호가 0으로 시작하는 숫자이면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('01,02,03,10,15,16');
    }).toThrow('0으로 시작하는 숫자');
  });

  test('당첨 번호가 1~45 사이가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumber('1,2,3,4,5,46');
    }).toThrow('사이의 수');
  });
});
