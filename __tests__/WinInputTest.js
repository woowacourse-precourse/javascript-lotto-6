import WinInput from '../src/WinInput';

describe('당첨번호입력 클래스 테스트', () => {
  test('번호를 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new WinInput('');
    }).toThrow('[ERROR]');
  });
  test('숫자가 아닌 값을 입력한 경우(쉼표 제외)예외가 발생한다.', () => {
    expect(() => {
      new WinInput('1,5,ㅁ,ㅎ,j');
    }).toThrow('[ERROR]');
  });
  test('쉼표로 구분 했을 때, 6개의 숫자가 아닌경우 예외가 발생한다.', () => {
    expect(() => {
      new WinInput('1,5,3,7,9,10,45');
    }).toThrow('[ERROR]');
  });
  test('1 ~ 45 사이의 숫자를 입력하지 않은 경우 예외가 발생한다.', () => {
    expect(() => {
      new WinInput('1,5,3,7,0,48');
    }).toThrow('[ERROR]');
  });
  test('중복된 숫자를 입력한 경우 예외가 발생한다.', () => {
    expect(() => {
      new WinInput('1,5,3,7,6,6');
    }).toThrow('[ERROR]');
  });
});
