import Bonus from '../src/model/Bonus.js';

describe('Bonus 클래스 테스트', () => {
  test('문자가 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('a');
    }).toThrow('[ERROR]');
  });
  test('공백이 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('    ');
    }).toThrow('[ERROR]');
  });
  test('특수 문자가 입력될 경우 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('$');
    }).toThrow('[ERROR]');
  });
  test('1 ~ 45 범위를 벗어난 숫자의 경우 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('0');
    }).toThrow('[ERROR]');
    expect(() => {
      new Bonus('46');
    }).toThrow('[ERROR]');
  });
  test('당첨 번호(6개)와 중복된 수라면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus('6', ['1', '2', '3', '4', '5', '6']);
    }).toThrow('[ERROR]');
  });
  test('발행된 로또가 보너스 수와 일치할 경우 true를 리턴한다.', () => {
    const bonus = new Bonus('7', [1, 2, 3, 4, 5, 6]);
    expect(bonus.computeMatchWithBonus([7, 1, 2, 3, 4, 5])).toBeTruthy();
  });
});
