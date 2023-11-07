import LottoGame from '../src/domain/LottoGame.js';

describe('LottoGame', () => {
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame();
    lottoGame.initializeLotto(2);
  });

  test('해당 메서드가 수량에 맞는 길이를 생성하는지 테스트한다.', () => {
    const purchasedLotto = lottoGame.getPurchasedLotto();

    expect(purchasedLotto).toHaveLength(2);
  });

  test('해당 메서드가 수량에 맞는 6자리의 배열을 반환하는지 테스트한다.', () => {
    const purchasedLotto = lottoGame.getPurchasedLotto();

    purchasedLotto.forEach((lottoNumbers) => {
      expect(lottoNumbers).toBeInstanceOf(Array);
      expect(lottoNumbers).toHaveLength(6);
    });
  });

  test('일치한 수와 보너스번호의 포함여부에 따라 당첨등수를 증가시키는지 테스트한다.', () => {
    const comparisonResults = [
      { matchingCount: 4, hasBonusNumber: true },
      { matchingCount: 5, hasBonusNumber: true },
      { matchingCount: 5, hasBonusNumber: false },
    ];

    const expectedResult = {
      firstPrize: 0,
      secondPrize: 1,
      thirdPrize: 1,
      fourthPrize: 1,
      fifthPrize: 0,
    };

    const result = lottoGame.getStatistics(comparisonResults);

    expect(result).toEqual(expectedResult);
  });

  test('당첨등수의 카운트에 따라 획득한 총 금액을 반환하는지 테스트한다.', () => {
    const statistics = {
      firstPrize: 0,
      secondPrize: 0,
      thirdPrize: 0,
      fourthPrize: 0,
      fifthPrize: 1,
    };

    const expectedResult = 5000;
    const result = lottoGame.getTotalPrizeAmount(statistics);

    expect(result).toEqual(expectedResult);
  });

  test('수익률을 소수점 첫번째 자리까지 반올림하여 반환하는지 테스트한다.', () => {
    const lottoGame = new LottoGame();
    lottoGame.initializeLotto(8);

    const expectedResult = '62.5';
    const result = lottoGame.getProfitRatio(5000);

    expect(result).toEqual(expectedResult);
  });
});
