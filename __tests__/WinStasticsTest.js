import WinStastics from '../src/Model/WinStastics.js';
import Lotto from '../src/Lotto';
import LottoTicket from '../src/Model/LottoTicket.js';

describe('당첨 통계에 대한 클래스 테스트', () => {
  const lottoTicket = LottoTicket.getInstance();

  lottoTicket.saveSpecificTypeData('ticket', [
    new Lotto([8, 21, 23, 41, 42, 43]),
    new Lotto([3, 5, 11, 16, 32, 38]),
    new Lotto([7, 11, 16, 35, 36, 44]),
    new Lotto([1, 8, 11, 31, 41, 42]),
    new Lotto([13, 14, 16, 38, 42, 45]),
    new Lotto([7, 11, 30, 40, 42, 43]),
    new Lotto([2, 13, 22, 32, 38, 45]),
    new Lotto([1, 3, 5, 14, 22, 45]),
  ]);
  test('setMatchesCount 실행 시 당첨 번호와 티켓의 로또 번호가 일치하는 개수가 통계에 갱신되는가?', () => {
    const winStastics = new WinStastics();
    const inputs = [['1,2,3,4,5,6', '7'], ['3,5,6,7,8,11', '15']];
    const answers = [{
      3: 1, 4: 0, 5: 0, 6: 0, bonus: 0,
    }, {
      3: 2, 4: 0, 5: 0, 6: 0, bonus: 0,
    }];

    for (let i = 0; i < inputs.length; i += 1) {
      lottoTicket.saveSpecificTypeData('win', inputs[i][0]);
      lottoTicket.saveSpecificTypeData('bonus', inputs[i][1]);

      winStastics.setMatchesCount();
      expect(winStastics.statistics.matchesCount).toMatchObject(answers[i]);
    }
  });

  test('setMatchesCount 실행 후 setEarningRate 실행 시 수익률이 통계에 갱신되는가?', () => {
    const winStastics = new WinStastics();
    const inputs = [['1,2,3,4,5,6', '7'], ['3,5,6,7,8,11', '15']];
    const answers = [{
      earningRate: 62.5,
    }, {
      earningRate: 125,
    }];

    for (let i = 0; i < inputs.length; i += 1) {
      lottoTicket.saveSpecificTypeData('win', inputs[i][0]);
      lottoTicket.saveSpecificTypeData('bonus', inputs[i][1]);

      winStastics.setMatchesCount();
      winStastics.setEarningRate();
      expect(winStastics.statistics.earningRate).toBe(answers[i].earningRate);
    }
  });
});
