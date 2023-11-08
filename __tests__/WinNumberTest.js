import WinNumber from '../src/module/model/WinNumber.js';

describe('당첨 번호 클래스 테스트', () => {
  test('당첨 번호의 크기가 6개가 아니면 에러가 발생한다.', () => {
    expect(() => {
      new WinNumber([1, 2, 3, 4, 5, 6, 7, 8], 9);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 에러가 발생한다.', () => {
    expect(() => {
      new WinNumber([1, 2, 3, 4, 6, 6], 9);
    }).toThrow('[ERROR]');
  });

  test('당첨 번호가 1 이상 45 이하의 정수로 구성되지 않으면 에러가 발생한다.', () => {
    expect(() => {
      new WinNumber([' a', 47, 'c', 'd', 'e', 'f'], 1);
    }).toThrow('[ERROR]');
  });
});
