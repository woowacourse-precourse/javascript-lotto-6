import PurchaseController from '../src/controller/PurchaseController';

describe('구매 컨트롤러 테스트', () => {
  test('로또 구입', () => {
    const quantity = 3;

    const controller = new PurchaseController();
    controller.purchaseLottos(3);

    expect(controller.getPurchasedLottos().length).toEqual(3);
  });
});
