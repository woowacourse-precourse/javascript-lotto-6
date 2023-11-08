import LottoComparison from '../../src/domains/LottoComparison';

describe('LottoComparison 클래스 테스트', () => {
  test('로또 번호를 당첨 번호와 보너스 번호와 비교하여 결과와 수익률을 반환한다.', async () => {
    // Arrange
    const myLotto = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ];
    const winningLottoMachine = {
      winningNumbers: [1, 2, 3, 10, 11, 12],
      bonusNumber: 7,
    };

    const outputRank = new Map([
      [3, 1],
      [4, 0],
      [5, 0],
      [5.5, 0],
      [6, 0],
    ]);
    const outputRateOfReturn = 250;

    // Act
    const lottoCompare = new LottoComparison(myLotto, winningLottoMachine);
    lottoCompare.run();

    // Assert
    const expectedRank = lottoCompare.rank;
    const expectedRateOfReturn = lottoCompare.rateOfReturn;

    expect(expectedRank).toEqual(outputRank);
    expect(expectedRateOfReturn).toEqual(outputRateOfReturn);
  });
});
