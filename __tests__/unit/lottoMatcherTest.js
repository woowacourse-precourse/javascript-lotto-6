import lottoMatcher from '../../src/util/matcher/lottoMatcher';

describe('구매내역, 당첨번호, 보너스 번호에 대한 처리 테스트', () => {
  const PURCHASE_LIST = [
    [1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8],
    [4, 5, 6, 7, 8, 9],
    [5, 6, 7, 8, 9, 10],
    [6, 7, 8, 9, 10, 11],
    [7, 8, 9, 10, 11, 12],
    [8, 9, 10, 11, 12, 13],
    [9, 10, 11, 12, 13, 14],
    [10, 11, 12, 13, 14, 15],
    [1, 2, 3, 4, 5, 6],
  ];

  const WINNING_NUMBER = [1, 2, 3, 4, 5, 6];
  const WINNING_NUMBER_FOR_BONUS_CHECK = [1, 2, 3, 4, 5, 8];

  const BONUS_NUMBER = 7;

  // 2등
  test('2등에 대한 반환값 테스트', () => {
    // given
    const testPurchase = [[1, 2, 3, 4, 5, 7]];
    const expectedResult = [1];

    // when
    const result = lottoMatcher(testPurchase, WINNING_NUMBER, BONUS_NUMBER);

    //then
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });

  // 3등
  test('3등에 대한 반환값 테스트', () => {
    // given
    const testPurchase = [[1, 2, 3, 4, 5, 45]];
    const expectedResult = [2];

    // when
    const firstResultTest = lottoMatcher(testPurchase, WINNING_NUMBER, BONUS_NUMBER);
    const seconstResultTest = lottoMatcher(testPurchase, WINNING_NUMBER_FOR_BONUS_CHECK, BONUS_NUMBER);

    //then
    expect(firstResultTest).toEqual(expect.arrayContaining(expectedResult));
    expect(seconstResultTest).toEqual(expect.arrayContaining(expectedResult));
  });

  // 통합 테스트
  test('통합 반환값 테스트', () => {
    // given
    const expectedResult = [0, 1, 4, 5, 6, 6, 6, 6, 6, 6, 0];

    // when
    const result = lottoMatcher(PURCHASE_LIST, WINNING_NUMBER, BONUS_NUMBER);
    //then
    expect(result).toEqual(expect.arrayContaining(expectedResult));
  });
});
