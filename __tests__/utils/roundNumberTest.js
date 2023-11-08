import roundNumber from '../../src/utils/roundNumber';

describe('method : roundNumber test', () => {
  test('소수점 4자리의 숫자가 주어졌을때 1자리까지 반올림 후 String 형으로 반환한다.', () => {
    // given
    const decimalNumber = 1.2999;

    // when
    // then
    expect(roundNumber(decimalNumber, 1)).toBe('1.3');
  });
  test('소수점 4자리의 숫자가 주어졌을때 3자리까지 반올림 후 String 형으로 반환한다.', () => {
    // given
    const decimalNumber = 1.2999;

    // when
    // then
    expect(roundNumber(decimalNumber, 3)).toBe('1.300');
  });
});
