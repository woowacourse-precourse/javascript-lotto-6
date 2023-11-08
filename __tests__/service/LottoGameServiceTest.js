import LottoGameService from '../../src/service/LottoGameService';

describe('로또 게임 서비스 클래스 테스트', () => {
  let lottoGameService;
  beforeEach(() => {
    lottoGameService = new LottoGameService();
  });

  test('로또 개수를 구한다.', () => {
    const purchaseAmount = 8000;
    const expected = 8;
    const purchaseCount = lottoGameService.getPurchaseCount(purchaseAmount);

    expect(purchaseCount).toStrictEqual(expected);
  });

  test('주어진 개수만큼 로또를 생성한다.', () => {
    const purchaseCount = 5;
    const expected = 5;
    const publishedLottos = lottoGameService.getPublishedLottos(purchaseCount);

    expect(publishedLottos.length).toStrictEqual(expected);
  });
});
