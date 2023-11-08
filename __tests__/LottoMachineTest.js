import LottoMachine from '../src/Model/LottoMachine.js';

describe('로또 기계 테스트', () => {
  test('로또 구입 금액이 4000원이면 로또를 4개 발행한다.', () => {
    const lottoMachine = new LottoMachine();
    const money = 4000;

    lottoMachine.insertMoney(money);

    expect(lottoMachine.numberOfLottos).toBe(4);
  });

  describe('예외 테스트', () => {
    test('로또 구입 금액이 양의 정수가 아니면 예외가 발생한다.', () => {
      const lottoMachine = new LottoMachine();
      const money = -1000;

      expect(() => {
        lottoMachine.insertMoney(money);
      }).toThrow('[ERROR]');
    });

    test('로또 구입 금액이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
      const lottoMachine = new LottoMachine();
      const money = 1500;

      expect(() => {
        lottoMachine.insertMoney(money);
      }).toThrow('[ERROR]');
    });
  });
});
