import LottoMachine from '../src/LottoMachine.js';

describe('로또 기계 테스트', () => {
  describe('예외 테스트', () => {
    test('로또 구입 금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
      const lottoMachine = new LottoMachine();
      expect(() => {
        lottoMachine.insertMoney(1500);
      }).toThrow('[ERROR]');
    });
  });
});
