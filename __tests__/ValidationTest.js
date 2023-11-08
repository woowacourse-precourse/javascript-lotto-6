import validateLotto from '../src/validation/validateLotto.js';
import validateMoney from '../src/validation/validateMoney.js';
import ERROR from '../src/constants/error.js';

describe('validateLotto 테스트', () => {
  test('빈 값인지 확인, 미통과시 예외 발생', () => {
    //given
    const lottoNumber = [];

    //when & then
    expect(() => validateLotto(lottoNumber)).toThrow('[ERROR]');
  });

  test('번호의 타입이 숫자인지 확인, 미통과시 예외 발생', () => {
    //given
    const lottoNumber = ['a', 1, 4, 5, 10, 12];

    //when & then
    expect(() => validateLotto(lottoNumber)).toThrow('[ERROR]');
  });

  test('번호 범위가 1~45인지 확인, 미통과시 예외 발생', () => {
    //given
    const lottoNumber = [1, 4, 5, 10, 12, 46];

    //when & then
    expect(() => validateLotto(lottoNumber)).toThrow('[ERROR]');
  });
});

describe('validateMoney 테스트', () => {
  test('금액을 입력했는지 확인, 미통과시 예외 발생', () => {
    //given
    const money = '';

    //when & then
    expect(() => validateMoney(money)).toThrow('[ERROR]');
  });

  test('금액의 타입이 숫자인지 확인, 미통과시 예외 발생', () => {
    //given
    const money = 'a';

    //when & then
    expect(() => validateMoney(money)).toThrow('[ERROR]');
  });

  test('금액이 1000원 이상인지 확인, 미통과시 예외 발생', () => {
    //given
    const money = 999;

    //when & then
    expect(() => validateMoney(money)).toThrow('[ERROR]');
  });

  test('구매 금액이 1000으로 나눠지는지 확인, 미통과시 예외 발생', () => {
    //given
    const money = 3500;

    //when & then
    expect(() => validateMoney(money)).toThrow('[ERROR]');
  });
})