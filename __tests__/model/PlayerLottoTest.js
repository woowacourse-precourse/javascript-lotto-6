import PlayerLotto from '../../src/model/PlayerLotto.js';

describe('플레이어 로또 클래스 테스트', () => {
  test.each([
    {
      randomNumbers: [1, 2, 3, 4, 5, 6],
      winningNumbers: [1, 2, 3, 4, 5, 6],
      winningBonusNumber: 7,
      expectResult: { mainNumber: 6, bonusNumber: false },
    },
    {
      randomNumbers: [1, 2, 3, 4, 5, 6],
      winningNumbers: [1, 2, 3, 7, 8, 9],
      winningBonusNumber: 4,
      expectResult: { mainNumber: 3, bonusNumber: true },
    },
  ])(
    '플레이어 로또 비교 테스트',
    ({ randomNumbers, winningNumbers, winningBonusNumber, expectResult }) => {
      // given
      const playerLotto = new PlayerLotto(randomNumbers);
      // when
      const result = playerLotto.compare(winningNumbers, winningBonusNumber);

      // then
      expect(result.mainNumber).toBe(expectResult.mainNumber);
      expect(result.bonusNumber).toBe(expectResult.bonusNumber);
    }
  );
});
