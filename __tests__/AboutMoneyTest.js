import divideMoney from '../src/utils/devideMoney';
import validateMoney from '../src/validation/validateMoney';
import CanNotDiviedBy1000Error from '../src/error/error';

describe('checkPurchase', () => {
  test('금액을 입력했는지 확인, 미통과시 예외 발생', () => {
    //given
    const money = '';

    //when & then
    expect(() => validateMoney(money)).toThrow(CanNotDiviedBy1000Error);
  });

  test('금액의 타입이 숫자인지 확인, 미통과시 예외 발생', () => {
    //given
    const money = 'a';

    //when & then
    expect(() => validateMoney(money)).toThrow(CanNotDiviedBy1000Error);
  });

  test('금액이 0원 이상인지 확인, 미통과시 예외 발생', () => {
    //given
    const money = 0;

    //when & then
    expect(() => validateMoney(money)).toThrow(CanNotDiviedBy1000Error);
  })

  test('구매 금액이 1000으로 나눠지는지 확인, 미통과시 예외 발생', () => {
    //given
    const money = 3500;

    //when & then
    expect(() => divideMoney(money)).toThrow(CanNotDiviedBy1000Error);
  });
});
