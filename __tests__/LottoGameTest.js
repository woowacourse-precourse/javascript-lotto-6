import LottoGame from '../src/domain/LottoGame';

describe('LottoGame', () => {
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame(2);
  });

  test('해당 메서드가 수량에 맞는 길이를 생성하는지 테스트한다.', () => {
    const generatedTickets = lottoGame.generateLottoTickets(5);

    expect(generatedTickets).toHaveLength(5);
  });

  test('해당 메서드가 수량에 맞는 6자리의 배열을 반환하는지 테스트한다.', () => {
    const purchasedLotto = lottoGame.getPurchasedLotto();

    expect(purchasedLotto).toHaveLength(2);

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
});
