import LottoGameResultCalculator from '../src/Components/LottoGameResultCalculator.js';
import Lotto from '../src/Lotto.js';

describe('로또 결과 계산기(LottoGameResultCalculator) 클래스 테스트', () => {
  test('로또 번호와 당첨 번호 일치 개수 구하기', () => {
    const lottoGameResultCalculator = new LottoGameResultCalculator();
    const lottoNumbers = [1, 3, 4, 6, 12, 15];
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    expect(
      lottoGameResultCalculator.getMatchingCountWithWinningNumbers({
        winningNumbers,
        lottoNumbers,
      })
    ).toEqual(4);
  });
  test('로또 번호와 보너스 번호 일치 개수 구하기', () => {
    const lottoGameResultCalculator = new LottoGameResultCalculator();
    const lottoNumbers = [1, 3, 4, 6, 12, 15];
    const bonusNumber = 30;

    expect(
      lottoGameResultCalculator.getMatchingCountWithBonusNumber({
        bonusNumber,
        lottoNumbers,
      })
    ).toEqual(0);
  });
  test('로또 번호와 당첨번호 및 보너스 번호와의 일치 개수 구하기', () => {
    const lottoGameResultCalculator = new LottoGameResultCalculator();
    const lottoNumbers = [1, 3, 4, 6, 12, 15];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 30;

    expect(
      lottoGameResultCalculator.getMatchingCount({
        winningNumbers,
        bonusNumber,
        lottoNumbers,
      })
    ).toEqual({
      matchingCountWithWinningNumbers: 4,
      matchingCountWithBonusNumber: 0,
    });
  });
  test('로또 번호와 당첨번호 및 보너스 번호와의 일치 개수를 이용하여, 로또 당첨 내역 구하기', () => {
    const lottoGameResultCalculator = new LottoGameResultCalculator();
    const matchingCountWithWinningNumbers = 4;
    const matchingCountWithBonusNumber = 0;

    expect(
      lottoGameResultCalculator.getMatchingResult(
        matchingCountWithWinningNumbers,
        matchingCountWithBonusNumber
      )
    ).toEqual(4);
  });

  test('모든 로또에 대한 당첨번호 및 보너스 번호와의 일치 개수를 이용하여, 전체 로또 당첨 내역 구하기', () => {
    const lottoGameResultCalculator = new LottoGameResultCalculator();
    const lottos = [
      new Lotto([1, 3, 4, 6, 12, 15]),
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([10, 11, 12, 13, 14, 15]),
      new Lotto([16, 17, 18, 19, 20, 21]),
      new Lotto([22, 23, 24, 25, 26, 27]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 30;

    expect(
      lottoGameResultCalculator.getMatchingResults({
        lottos,
        winningNumbers,
        bonusNumber,
      })
    ).toEqual({ 3: 0, 4: 1, 5: 0, 5.5: 0, 6: 1 });
  });

  test('당첨 상금 구하기', () => {
    const lottoGameResultCalculator = new LottoGameResultCalculator();
    const matchingResult = { 3: 0, 4: 1, 5: 0, 5.5: 0, 6: 1 };

    expect(lottoGameResultCalculator.getTotalPrize(matchingResult)).toEqual(
      2000050000
    );
  });

  test('수익률 구하기', () => {
    const lottoGameResultCalculator = new LottoGameResultCalculator();
    const totalPrize = 1500000;
    const purchaseAmount = 5000;

    expect(
      lottoGameResultCalculator.getRateOfReturn({ totalPrize, purchaseAmount })
    ).toEqual(30000);
  });
});
