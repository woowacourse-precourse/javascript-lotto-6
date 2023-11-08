import Lotto from '../src/domain/Lotto';
/* eslint-disable max-lines-per-function */
import Prize from '../src/domain/Prize';
import WinningLotto from '../src/domain/WinningLotto';

describe('Prize', () => {
  test('특정 로또와 당첨 로또를 비교하여 보상을 받을 수 있는지 계산할 수 있다. ', () => {
    // given
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 4, 44, 45];
    // 1,2,3,4 4개 일치

    const bonusNumber = 7;
    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);

    const matchingNumbers = 4;
    const money = 30_000;
    const prize = new Prize(matchingNumbers, money);

    // when
    const canReceiveReward = prize.canReceive(lotto, winningLotto);

    // then
    expect(canReceiveReward).toBeTruthy();
  });
});
