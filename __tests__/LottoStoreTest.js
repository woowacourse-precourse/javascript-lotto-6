import Lotto from '../src/lotto/Lotto.js';
import LottoStore from '../src/lotto/LottoStore.js';
import { getAndValidateInput } from '../src/utility/console.js';

jest.mock('../src/utility/console.js', () => ({
  getAndValidateInput: jest.fn(),
  print: jest.fn(),
}));

describe('LottoStore 클래스 테스트', () => {
  let lottoStore;

  beforeEach(async () => {
    const NORMAL_MONEY_INPUT = '5000';
    getAndValidateInput.mockResolvedValue(NORMAL_MONEY_INPUT);

    lottoStore = new LottoStore();
    await lottoStore.setLottoStore();
  });

  test('setLottoStore에서 정상적으로 money를 세팅하는지 테스트', () => {
    const NOMAL_MONEY = 5000;
    expect(lottoStore.getMoney()).toBe(NOMAL_MONEY);
  });

  test('setLottoStore에서 정상적으로 publishCount를 세팅하는지 테스트', () => {
    const LOTTO_NUMBER = 5;
    const lottos = lottoStore.publishLottos();
    expect(lottos.length).toBe(LOTTO_NUMBER);
  });

  test('publishLottos 함수가 Lotto 인스턴스를 반환하는지 테스트', () => {
    const lottos = lottoStore.publishLottos();
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });
});