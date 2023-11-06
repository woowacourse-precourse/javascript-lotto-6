import LottoController from '../src/controller/LottoController.js';
import InputValidator from '../src/utils/InputValidator.js';

describe('로또 컨트롤러 테스트', () => {
  test('구입 금액에 따른 로또 개수 반환', () => {
    const lottoController = new LottoController();
    const money = '5000';

    const lottoCount = lottoController.calculateLottoCount(money);

    expect(lottoCount).toBe(5);
  });

  test('천원 단위로 입력 받기 예외', () => {
    const money = '4500';

    expect(() => InputValidator.validatePurchaseMoney(money)).toThrow('[ERROR]');
  });

  test('음수 입력 받기 예외', () => {
    const money = '-4500';

    expect(() => InputValidator.validatePurchaseMoney(money)).toThrow('[ERROR]');
  });
});
