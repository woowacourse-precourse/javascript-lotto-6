import krwCurrencyAsWonFormat from '../../src/utils/krwCurrencyAsWonFormat';

describe('method : krwCurrencyAsWonFormat 테스트', () => {
  test('10000 이라는 숫자가 들어왔을때 반환되는 값의 마지막은 (원) 으로 끝나야한다.', () => {
    // given
    const money = 10000;

    // when
    // then
    expect(krwCurrencyAsWonFormat(money)).toMatch(/원$/);
  });

  test('백만(1000000) 이라는 숫자가 들어왔을때 1000원 단위로 (,)가 찍혀야한다.', () => {
    // given
    const money = 1000000;

    // when
    const result = krwCurrencyAsWonFormat(money).split(',');
    const expected = ['1', '000', '000원'];

    // then
    expect(result).toEqual(expected);
  });
});
