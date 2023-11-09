/* eslint-disable */
import LottoService from '../src/service/LottoService.js';
import WinningLotto from '../src/domain/WinningLotto.js';
describe('로또 서비스 테스트', () => {
  describe('로또 생성 테스트', () => {
    // given
    const lottoService = new LottoService();
    const addCases = [
      { input: 3000, expected: 3 },
      { input: 1000, expected: 1 },
    ];
    test.each(addCases)(
      '구입 금액이 $input이라면, 로또 개수는 $expected 개가 되어야 한다.',
      ({ input, expected }) => {
        // when
        const lottoCount = lottoService.sellLotto(input)[0].length;
        // then
        expect(lottoCount).toEqual(expected);
      },
    );
  });

  describe('당첨 로또 생성 테스트', () => {
    //given
    const testCase = [[1, 2, 3, 4, 5, 6], 7];
    const lottoService = new LottoService();
    const expected = new WinningLotto({
      numbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
    });
    //when then
    expect(lottoService.getWinningLotto(...testCase)).toEqual(expected);
  });
});
class PrizeService {
  constructor(prize) {
    this.prize = prize;
  }

  compareNumbers(userNumbers, winningNumbers) {
    // 로또 번호들과 당첨 번호를 비교하는 로직
  }

  calculatePrizeMoney(rank) {
    // 당첨금을 계산하는 로직
    return this.prize.getPrize(rank);
  }

  calculateReturnRate(totalSpent, totalWon) {
    // 수익률을 계산하는 로직
  }

  printWinningHistory() {
    // 당첨 내역을 출력하는 로직
  }
}
