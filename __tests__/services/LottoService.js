import Account from '../../src/models/Account';
import LottoService from '../../src/services/LottoService';

describe('LottoService 테스트', () => {
  let lottoService;

  beforeEach(() => {
    lottoService = new LottoService();
  });

  test(`Account 객체를 반환할 수 있다.`, () => {
    expect(lottoService.getAccount()).toBeInstanceOf(Account);
  });

  test(`입력한 금액 1000원에 대해 1000단위로 나눈 1개의 로또를 구매할 수 있다.`, () => {
    lottoService.setPurchaseAmount(1000);

    lottoService.buyLottos();

    expect(lottoService.getLottos()).toHaveLength(1);
  });

  test(`입력한 금액 2000원에 대해 1000단위로 나눈 2개의 로또를 구매할 수 있다.`, () => {
    lottoService.setPurchaseAmount(2000);

    lottoService.buyLottos();

    expect(lottoService.getLottos()).toHaveLength(2);
  });
});
