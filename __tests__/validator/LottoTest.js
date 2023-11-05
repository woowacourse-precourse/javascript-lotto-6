import LottoValidator from '../../src/validator/Lotto';

describe('LottoValidator 클래스 예외 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.validateCount([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.validateDuplication([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  describe('로또 번호 범위 테스트', () => {
    test('로또 번호에 0 이하의 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        LottoValidator.validateLottoNumbers([0, 1, 2, 3, 4, 5]);
      }).toThrow('[ERROR]');
    });

    test('로또 번호에 46 이상의 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        LottoValidator.validateLottoNumbers([1, 2, 3, 4, 5, 47]);
      }).toThrow('[ERROR]');
    });
  });

  describe('보너스 번호 예외 테스트', () => {
    test('보너스 번호가 0 이하라면 예외가 발생한다.', () => {
      const number = 0;

      expect(() => LottoValidator.validateLottoNumber(number)).toThrow(
        '[ERROR]',
      );
    });

    test('보너스 번호가 46 이상이라면 예외가 발생한다.', () => {
      const number = 46;

      expect(() => LottoValidator.validateLottoNumber(number)).toThrow(
        '[ERROR]',
      );
    });
  });
});
