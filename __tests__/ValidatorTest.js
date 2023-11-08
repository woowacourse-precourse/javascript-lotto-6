import LottoValidator from '../src/validators/LottoValidator';
import PurChaseValidator from '../src/validators/PurchaseValidator';

describe('로또 번호 예외 처리 테스트', () => {
  test.each([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3],
  ])('6자리의 숫자인지 확인', (input) => {
    expect(() => LottoValidator.isSixDigit([...input])).toThrow();
  });

  test.each([
    [1, 1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 5],
  ])('중복된 숫자인지 확인', (input) => {
    expect(() => LottoValidator.isDuplicate([...input])).toThrow();
  });

  test.each([
    [1, 24, 36, 45, 47, 11],
    [33, 1, 27, 35, 49, 50],
  ])('1~45숫자만 있는지', (input) => {
    expect(() => LottoValidator.isLottoNumberRange([...input])).toThrow();
  });

  test.each([
    [1, 2, 3, 4, 5],
    [1, 1, 2, 3, 4, 5],
    [11, 22, 33, 44, 55, 66],
  ])('한번에 로또 번호에 대한 예외 처리 테스트', (input) => {
    expect(() => LottoValidator.isLotto(input)).toThrow();
  });
});

describe('구입금액 입력 테스트', () => {
  test.each([8300, 100000, 500])('1000원단위로 최소금액과 최대금액 사이인지', (input) => {
    expect(() => PurChaseValidator.checkPurchase(input)).toThrow();
  });
});
