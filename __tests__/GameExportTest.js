// GameExport.test.js

import GameExport from '../src/GameExport.js';
import { randomNum } from '../src/utils.js';

// Mock the randomNum function
jest.mock('../src/utils.js', () => ({
  randomNum: jest.fn(),
}));

describe('GameExport 클래스', () => {
  let gameExport;

  beforeEach(() => {
    gameExport = new GameExport();
    // PurchaseLotto와 그의 메서드들을 mock 처리
    gameExport.purchaseLotto = {
      initialize: jest.fn(),
      getLottoCount: jest.fn(),
    };
    // Mock the randomNum function to return a predictable set of numbers
    randomNum.mockReturnValue([1, 2, 3, 4, 5, 6]);
  });

  // makeLotto 메서드 테스트
  test('makeLotto 메서드는 #lottos 배열에 Lotto 인스턴스를 추가한다', () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    gameExport.makeLotto(lottoNumbers);
    expect(gameExport.getLottos()).toHaveLength(1);
    expect(gameExport.getLottos()[0].getNumbers()).toEqual(lottoNumbers);
  });

  // createLotto 메서드 테스트
  test('createLotto 메서드는 지정된 개수의 로또를 생성하고 정렬된 번호로 반환한다', async () => {
    gameExport.purchaseLotto.getLottoCount.mockResolvedValue(3); // 3개의 로또를 구매한다고 가정

    const lottos = await gameExport.createLotto();

    expect(lottos).toHaveLength(3);
    lottos.forEach((lottoNumbers) => {
      expect(lottoNumbers).toEqual([1, 2, 3, 4, 5, 6]); // Mock된 randomNum의 반환값
    });
  });

  // viewLottoList 메서드 테스트
  test('viewLottoList 메서드는 생성된 로또 리스트를 문자열로 반환한다', async () => {
    gameExport.purchaseLotto.getLottoCount.mockResolvedValue(1);

    const listString = await gameExport.viewLottoList();

    expect(listString).toBe('[1, 2, 3, 4, 5, 6]');
  });

  // getEachCompareResult 메서드 테스트
  test('getEachCompareResult 메서드는 각 로또의 비교 결과를 반환한다', async () => {
    gameExport.purchaseLotto.getLottoCount.mockResolvedValue(1);
    await gameExport.createLotto();

    const compareResults = gameExport.getEachCompareResult([1, 2, 3, 4, 5, 6], 7);

    expect(compareResults).toEqual([{ matchCount: 6, hasBonusNumber: false }]);
  });

  // getStatistics 메서드 테스트
  test('getStatistics 메서드는 각 등수별 당첨 개수를 계산하여 반환한다', () => {
    // 간단한 통계 객체를 만들어보자. 여기서는 실제 로또 결과가 아니라 가정된 결과를 사용한다.
    const eachCompareResult = [
      { matchCount: 3, hasBonusNumber: false },
      { matchCount: 5, hasBonusNumber: true },
      { matchCount: 6, hasBonusNumber: false },
    ];

    const statistics = gameExport.getStatistics(eachCompareResult);

    expect(statistics).toEqual({
      FIFTH_PRIZE: 1,
      FOURTH_PRIZE: 0,
      THIRD_PRIZE: 0,
      SECOND_PRIZE: 1,
      FIRST_PRIZE: 1,
    });
  });

  // getTotalPrizeMoney 메서드 테스트
  test('getTotalPrizeMoney 메서드는 총 상금을 계산하여 반환한다', () => {
    const statistics = {
      FIFTH_PRIZE: 1,
      FOURTH_PRIZE: 0,
      THIRD_PRIZE: 0,
      SECOND_PRIZE: 1,
      FIRST_PRIZE: 1,
    };

    const totalPrizeMoney = gameExport.getTotalPrizeMoney(statistics);

    // 상금 계산 로직에 따라 적절한 값으로 검증
    expect(totalPrizeMoney).toBe(2030005000);
  });

  // getPriceEarningsRatio 메서드 테스트
  test('getPriceEarningsRatio 메서드는 수익률을 계산하여 반환한다', () => {
    const totalPrizeMoney = 1000000; // 테스트를 위한 상금
    gameExport.getLottos().push(...new Array(5)); // 5개의 로또를 구매한 것으로 가정

    const priceEarningsRatio = gameExport.getPriceEarningsRatio(totalPrizeMoney);

    // 수익률 계산 로직에 따라 적절한 값으로 검증
    expect(priceEarningsRatio).toBe(20000);
  });
});
