import Lotto from "../src/Lotto";
import LottoTickets from "../src/LottoTickets";

describe('당첨 내역 출력 테스트', () => {
  test('발행된 로또가 2개 이상일때 당첨 내역 출력', () => {
    const lottos = [
      [1,2,3,8,9,10],
      [1,2,3,4,12,23,34]
    ]
    const winningNumbers = [1,2,3,4,5,6]
    const bonusNumber = 7
    const result = [0, 0, 0, 1, 1];

    const stats = new Lotto(winningNumbers).calculateWinningStats(lottos, winningNumbers, bonusNumber);

    expect(stats).toEqual(result);
  });

  test('당첨 내역이 없을 때 테스트', () => {
    const lottos = [
      [1,2,3,8,9,10],
      [11,12,13,14,15,16],
      [17,18,19,20,21,22]
    ]
    const winningNumbers = [1,12,13,19,20,23]
    const bonusNumber = 2
    const result = [0, 0, 0, 0, 0];

    const stats = new Lotto(winningNumbers).calculateWinningStats(lottos, winningNumbers, bonusNumber);

    expect(stats).toEqual(result);
  });
});
