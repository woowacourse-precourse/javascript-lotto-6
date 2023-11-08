import ValidateController from '../src/controller/ValidateController';

describe('입력 검증 테스트 - 로또 구입 금액', () => {
  test('구입 금액이 양의 정수가 아닌 경우 예외 발생', () => {
    const controller = new ValidateController();
    expect(() => controller.validatePurchaseAmount('%8234')).toThrow('[ERROR]');
  });

  test('구입 금액이 1000원 단위가 아닐 경우 예외 발생', () => {
    const controller = new ValidateController();
    expect(() => controller.validatePurchaseAmount('1004')).toThrow('[ERROR]');
  });

  test('구입 금액이 0일 경우 예외 발생', () => {
    const controller = new ValidateController();
    expect(() => controller.validatePurchaseAmount('0')).toThrow('[ERROR]');
  });
});

describe('입력 검증 테스트 - 보너스 번호 입력', () => {
  test.each(['46', '0'])(
    '보너스 번호가 1~45 범위를 벗어난 경우 예외 발생',
    () => {
      const controller = new ValidateController();
      expect(() => controller.validateBonusNumber('46')).toThrow('[ERROR]');
    }
  );
});
