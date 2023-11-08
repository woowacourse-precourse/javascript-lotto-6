import compareLottoNumbers from '../src/utils/compareLottoNumbers';

describe('compareLottoNumbers() 함수 테스트', () => {
  test('로또 번호를 당첨 번호와 보너스 번호와 비교하여 올바른 결과를 기록한다.', () => {
    // Arrange
    const lotto = [1, 2, 3, 4, 5, 6];
    const winningNumbers = [1, 2, 3, 4, 11, 12];
    const bonusNumber = 13;
    const rank = new Map([
      [3, 0],
      [4, 0],
      [5, 0],
      [5.5, 0],
      [6, 0],
    ]);

    // Act
    compareLottoNumbers(lotto, winningNumbers, bonusNumber, rank);

    // Assert
    const expectedRank = new Map([
      [3, 0],
      [4, 1],
      [5, 0],
      [5.5, 0],
      [6, 0],
    ]);
    expect(expectedRank).toEqual(rank);
  });
});
