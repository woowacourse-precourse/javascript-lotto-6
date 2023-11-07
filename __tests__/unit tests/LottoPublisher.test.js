import NUMBER from '../../src/utils/constants/number.js';
import LottoPublisher from '../../src/models/LottoPublisher.js';

describe('LottoPublisher 클래스 테스트', () => {
  const { game } = NUMBER;

  describe('setMoneyAmount 메서드 테스트', () => {
    it('유효한 금액이 제공될 때 Lotto를 올바른 수로 발행해야 함', () => {
      const publisher = new LottoPublisher();
      const validAmount = game.money.unitAmount * 3;
      publisher.setMoneyAmount(validAmount);

      const lottos = publisher.publishLottos();

      expect(lottos).toHaveLength(validAmount / game.money.unitAmount);
    });

    it('유효하지 않은 금액이 제공될 때 에러를 발생시켜야 함', () => {
      const publisher = new LottoPublisher();
      const invalidAmount = 'invalid_amount';
      expect(() => {
        publisher.setMoneyAmount(invalidAmount);
      }).toThrow();
    });
  });

  describe('publishLottos 메서드', () => {
    it('각 Lotto에 대해 고유한 번호를 생성해야 함', () => {
      const moneyAmount = game.money.unitAmount * 3;
      const publisher = new LottoPublisher();
      publisher.setMoneyAmount(moneyAmount);

      const lottos = publisher.publishLottos();

      lottos.forEach(lottoInstance => {
        expect(new Set(lottoInstance.getNumbers()).size).toBe(
          lottoInstance.getNumbers().length,
        );
      });
    });
  });
});
