import Lotto from '../../src/Lotto.js';
import WinningLotto from '../../src/Model/WinningLotto.js';
import WinningMachine from '../../src/Model/WinningMachine.js';

describe('WinningMachine 클래스 테스트', () => {
  describe('calculateStatistics 메소드 테스트', () => {
    const cases = [
      {
        purchaseLotto: [11, 12, 13, 24, 35, 37],
        numbers: [11, 12, 13, 24, 35, 37],
        bonusNumber: 16,
        result: {
          match3: 0,
          match4: 0,
          match5: 0,
          match5Bonus: 0,
          match6: 1,
        },
      },
      {
        purchaseLotto: [11, 12, 13, 24, 35, 16],
        numbers: [11, 12, 13, 24, 35, 37],
        bonusNumber: 16,
        result: {
          match3: 0,
          match4: 0,
          match5: 0,
          match5Bonus: 1,
          match6: 1,
        },
      },
    ];

    test.each(cases)(
      'WinningLotto와 Lotto를 비교해 WinningMachine 내 matchResult가 맞게 증가한다.',
      ({ purchaseLotto, numbers, bonusNumber, result }) => {
        const lotto = new Lotto(purchaseLotto);
        const winningLotto = new WinningLotto({ numbers, bonusNumber });
        const winningMachine = new WinningMachine();
        winningMachine.calculateStatistics({ lotto, winningLotto });

        expect(winningMachine.getMatchResult()).toEqual(result);
      },
    );
  });
});
