import Bonus from '../src/Bonus.js';

describe('보너스 번호 클래스 테스트', () => {
  const LOTTO = [5, 12, 19, 24, 33, 45];

  test('숫자가 아닌 값이면 예외가 발생한다.', () => {
    const NOT_A_NUMBER = NaN;

    expect(() => {
      new Bonus(NOT_A_NUMBER, LOTTO);
    }).toThrow('[ERROR]');
  });

  test('1보다 작은 숫자면 예외가 발생한다.', () => {
    const NUMBER = 0;

    expect(() => {
      new Bonus(NUMBER, LOTTO);
    }).toThrow('[ERROR]');
  });

  test('45보다 큰 숫자면 예외가 발생한다.', () => {
    const NUMBER = 46;

    expect(() => {
      new Bonus(NUMBER, LOTTO);
    }).toThrow('[ERROR]');
  });

  test('보너스 숫자가 당첨 숫자들 중에 있는 숫자면 예외가 발생한다.', () => {
    const NUMBER = 19;

    expect(() => {
      new Bonus(NUMBER, LOTTO);
    }).toThrow('[ERROR]');
  });

  test('예외 없이 유효성 검사를 마치면 보너스 숫자 값을 얻을 수 있다.', () => {
    // given
    const NUMBER = 7;

    // when
    const bonusObject = new Bonus(NUMBER, LOTTO);
    const bonus = bonusObject.getBonus();

    // then
    expect(bonus).toBe(NUMBER);
  });
});
