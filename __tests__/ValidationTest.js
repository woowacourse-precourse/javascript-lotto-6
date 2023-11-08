import Validation from '../src/model/Validation';

describe('유효성 검사 테스트', () => {
  describe('구입 금액 유효성 검사', () => {
    test('구입 금액이 숫자가 아니라면 예외가 발생한다.', () => {
      expect(() => {
        new Validation('한글').validatePrice();
      }).toThrow('[ERROR]');
    });

    test('구입 금액이 천 원 단위가 아니라면 경우 예외가 발생한다.', () => {
      expect(() => {
        new Validation('5500').validatePrice();
      }).toThrow('[ERROR]');
    });
  });

  describe('로또 번호 및 보너스번호 유효성 검사', () => {
    test('로또 번호 및 보너스번호가 1 ~ 45 사이의 숫자가 아니라면 예외가 발생한다.', () => {
      expect(() => {
        new Validation([0, 1, 2, 3, 4, 5, 6]).validateLotto();
      }).toThrow('[ERROR]');
    });

    test('로또 번호 및 보너스번호가 중복된다면 예외가 발생한다.', () => {
      expect(() => {
        new Validation([1, 1, 2, 3, 4, 5, 6]).validateLotto();
      }).toThrow('[ERROR]');
    });
  });

  test('로또번호가 6개가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      Validation.validateLottoLength([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });
});
