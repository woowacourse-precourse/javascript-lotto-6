import Money from '../src/Money';

describe('머니 클래스 테스트', () => {
  test('숫자가 아니면 예외가 발생한다.', () => {
    // given
    const stringMoney = '2000원';
    const money = Number(stringMoney);

    // when
    const result = () => new Money(money);

    // then
    expect(result).toThrow('[ERROR]');
  });

  test('정수가 아니면 예외가 발생한다.', () => {
    // given
    const stringMoney = '3000.3';
    const money = Number(stringMoney);

    // when
    const result = () => new Money(money);

    // then
    expect(result).toThrow('[ERROR]');
  });

  test('1000원으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    // given
    const stringMoney = '3500';
    const money = Number(stringMoney);

    // when
    const result = () => new Money(money);

    // then
    expect(result).toThrow('[ERROR]');
  });

  test('1000원으로 나누어 떨어지면 예외가 발생하지 않는다.', () => {
    // given
    const stringMoney = '2000';
    const money = Number(stringMoney);

    // when
    const result = () => new Money(money);

    // then
    expect(result).not.toThrow('[ERROR]');
  });

  test('입력한 금액에 맞는 구매 횟수를 가진다.', () => {
    // given
    const stringMoney = '2000';
    const money = Number(stringMoney);
    const answer = 2;

    // when
    const result = new Money(money);

    // then
    expect(result.getPurchaseCount()).toEqual(answer);
  });
});
