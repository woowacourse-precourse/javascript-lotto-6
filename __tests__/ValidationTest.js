import MoneyValidator from '../src/validator/MoneyValidator';
import LottoValidator from '../src/validator/LottoValidator';

describe('구매 금액 테스트', () => {
  test('구매 금액은 양의 정수', () => {
    expect(() => {
      MoneyValidator.isPositiveInt('0').toThrow('[ERROR]');
    });
  });

  test('구매 금액은 1000의 배수', () => {
    expect(() => {
      MoneyValidator.isDivisibleBy1000('500').toThrow('[ERROR]');
    });
  });
});

describe('로또 숫자 테스트', () => {
  test('로또 숫자는 6개', () => {
    expect(() => {
      LottoValidator.isSixLength([]).toThrow('[ERROR]');
    });
    expect(() => {
      LottoValidator.isSixLength(['1']).toThrow('[ERROR]');
    });
  });

  test('로또 숫자는 양의 정수', () => {
    expect(() => {
      LottoValidator.isAllPositiveInt(['1', '2', '3', '4', '5', '0']);
    });
  });

  test('로또 숫자는 1부터 45까지의 수', () => {
    expect(() => {
      LottoValidator.isAllValidRange(['1', '2', '3', '4', '5', '46']);
    });
  });
  test('로또 숫자는 중복되지 않는 수', () => {
    expect(() => {
      LottoValidator.isDuplicated(['1', '1', '2', '3', '4', '5']);
    });
  });
});

describe('보너스 숫자 테스트', () => {
  test('보너스 숫자는 1부터 45까지의 수', () => {
    expect(() => {
      LottoValidator.isAllValidRange('0').toThrow('[ERROR]');
    });
  });
  test('보너스 숫자는 로또 숫자와 중복되지 않는 수', () => {
    expect(() => {
      LottoValidator.isDuplicatedBonus(
        ['1', '2', '3', '4', '5', '6'],
        '1',
      ).toThrow('[ERROR]');
    });
  });
});
