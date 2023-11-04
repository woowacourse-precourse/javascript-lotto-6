import CommonValidator from '../../src/validator/Common';

describe('CommonValidator 클래스 예외 테스트', () => {
  describe('로또 번호 범위 테스트', () => {
    test('로또 번호에 0 이하의 숫자가 있으면 예외가 발생한다.', () => {
      const numbers = [0, 1, 2, 3, 4, 5];

      numbers.forEach(number =>
        expect(() => CommonValidator.validateLottoNumber(number)).toThrow(
          '[ERROR]',
        ),
      );
    });

    test('로또 번호에 46 이상의 숫자가 있으면 예외가 발생한다.', () => {
      const numbers = [1, 2, 3, 4, 5, 47];

      numbers.forEach(number =>
        expect(() => CommonValidator.validateLottoNumber(number)).toThrow(
          '[ERROR]',
        ),
      );
    });
  });
});
