import LottoMachine from '../src/domain/LottoMachine';

describe('LottoMachine 클래스 테스트', () => {
  let lottoMachine = new LottoMachine();

  test('올바른 갯수의 로또를 생성하는지 확인한다.', () => {
    lottoMachine.buyLottos(14000);
    const lottos = lottoMachine.getLottos();
    expect(lottos.length).toEqual(14);
  });

  test('로또 가격이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      lottoMachine.buyLottos('string');
    }).toThrow('[ERROR]');
  });

  test('로또 가격이 1000원 단위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      lottoMachine.buyLottos(999);
    }).toThrow('[ERROR]');
  });
});
