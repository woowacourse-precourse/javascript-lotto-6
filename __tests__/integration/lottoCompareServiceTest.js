import lottoCompareService from '../../src/service/lottoCompareService';
import parseToMap from '../../src/util/parse/parseToMap';
import getRateOfReturn from '../../src/util/yield/getRateOfReturn';

describe('구매내역과 당첨 번호 일치 테스트', () => {
  const MATCH_RESULT = [1, 0, 0, 2, 3, 4, 5, 6, 2, 2, 3, 6, 6, 6, 6];
  const PURCHASE_AMOUNT = 15000;

  test('구매 내역의 당첨 갯수를 반환', () => {
    // then
    const result = parseToMap(MATCH_RESULT);
    const expectedResult = new Map([
      [0, 2],
      [1, 1],
      [2, 3],
      [3, 2],
      [4, 1],
    ]);

    // when
    expect(result).toEqual(expect.objectContaining(expectedResult));
  });

  test('당첨 갯수로 수익률을 반환', () => {
    // given
    const resultMap = new Map([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 1],
    ]);
    const purchaseAmount = 1000;

    // then
    const result = getRateOfReturn(resultMap, purchaseAmount);
    const expectedResult = (500.0).toFixed(1);

    // when
    expect(result).toBe(expectedResult);
  });

  test('당첨 결과의 수익률, 당첨 갯수를 반환 ', () => {
    // given
    const matchResult = [0, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6];
    const purchaseAmount = 15000;

    // then
    const result = lottoCompareService(matchResult, purchaseAmount);

    const expectedResultCount = new Map([
      [0, 1],
      [1, 1],
      [2, 2],
      [3, 2],
      [4, 3],
    ]);
    const expectedRateOfReturn = (13554100.0).toFixed(1);
    const expectedResult = {
      resultCount: expectedResultCount,
      rateOfReturn: expectedRateOfReturn,
    };

    // when
    expect(result.resultCount).toEqual(expectedResult.resultCount);
    expect(result.rateOfReturn).toEqual(expectedResult.rateOfReturn);
  });
});
