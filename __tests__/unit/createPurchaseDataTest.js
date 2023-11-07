import createPurchaseData from '../../src/util/purchase/createPurchaseData';

describe('로또 구매 리스트 생성 테스트', () => {
  test('구매 금액 만큼의 길이를 가지는 배열을 생성', async () => {
    // given
    const testLottoCount = 8;
    const defaultList = [];

    // when
    const result = createPurchaseData(testLottoCount, defaultList);
    const resultLength = (await result).length;

    //then
    expect(resultLength).toBe(8);
  });
});
