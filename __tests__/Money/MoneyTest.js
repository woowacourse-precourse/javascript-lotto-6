import Money from '../../src/domains/Money.js';

describe('구입 금액 클래스 테스트', () => {
  test.each([['999'], ['0'], ['-123']])('천원 미만의 금액일 경우 예외가 발생한다.', (input) => {
    expect(() => {
      new Money(input);
    }).toThrow();
  });

  test.each([[' '], [' 12'], ['12 '], ['10 23'], ['dsx']])(
    '숫자가 아닌 경우 에러가 발생한다',
    (input) => {
      expect(() => {
        new Money(input);
      }).toThrow();
    },
  );

  test.each([['1234'], ['1001']])(
    '1000원 단위로 나누어떨이지지 않는경우 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Money(input);
      }).toThrow();
    },
  );
});
