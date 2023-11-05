import Bonus from '../../src/Bonus.js';

describe('Bonus', () => {
  test('유효한 숫자를 넣었을 때 에러가 발생하지 않고 올바른 값을 출력한다.', () => {
    // given
    const validNumber = '10';

    // when
    const bonus = Bonus.of(validNumber);

    // then
    expect(bonus.getBonusNumber()).toBe(10);
  });

  test('빈 문자열을 입력했을 때 에러가 발생해야한다.', () => {
    const emptyString = '';
    expect(() => Bonus.of(emptyString)).toThrowError('[ERROR]');
  });

  it('문자가 포함되었을 때 에러가 발생해야한다.', () => {
    const nonNumericString = 'abc123';
    expect(() => Bonus.of(nonNumericString)).toThrowError('[ERROR] ');
  });

  it('1~45 사이의 숫자가 아니면 에러를 발생해야 한다.', () => {
    const outOfRangeNumber = '50';
    expect(() => Bonus.of(outOfRangeNumber)).toThrowError('[ERROR]');
  });
});
