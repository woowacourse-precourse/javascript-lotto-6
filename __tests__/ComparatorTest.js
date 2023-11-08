import LottoTicket from '../src/Model/LottoTicket.js';
import Comparator from '../src/Controller/Comparator.js';
import Lotto from '../src/Lotto.js';

describe('비교기 클래스 테스트', () => {
  // 테스트에 쓰일 기본적인 환경으로 사용자가 구매한 로또 티켓을 설정한다.
  const lottoTicket = LottoTicket.getInstance();
  lottoTicket.saveSpecificTypeData('ticket', [
    new Lotto([1, 2, 3, 4, 5, 6]),
    new Lotto([4, 5, 6, 7, 8, 9]),
    new Lotto([1, 10, 11, 12, 13, 14]),
  ]);

  test('로또 당첨 번호와 로또 티켓의 일치하는 번호에 대한 개수를 반환하는가?', () => {
    const comparator = new Comparator();
    const inputs = [['1,2,3,4,5,6', '7'], ['4,5,6,7,8,10', '11']];
    const answers = [[6, 3, 1], [3, 5, 1]];

    for (let i = 0; i < inputs.length; i += 1) {
      lottoTicket.ticket.forEach((lotto, j) => {
        // 로또 티켓에 당첨번호와 보너스 번호 저장
        lottoTicket.saveSpecificTypeData('win', inputs[i][0]);
        lottoTicket.saveSpecificTypeData('bonus', inputs[i][1]);

        const matchesCount = comparator.countMatches(lotto.numbers);
        expect(matchesCount).toBe(answers[i][j]);
      });
    }
  });

  test('중복된 일치횟수가 여러개일 경우 중복된 횟수 만큼 데이터를 저장할 수 있는가?', () => {
    const inputs = [['11,22,33,4,5,6', '10'], ['4,5,6,17,18,10', '9']];

    for (let i = 0; i < inputs.length; i += 1) {
      // 로또 티켓에 당첨번호와 보너스 번호 저장
      const comparator = new Comparator();
      lottoTicket.saveSpecificTypeData('win', inputs[i][0]);
      lottoTicket.saveSpecificTypeData('bonus', inputs[i][1]);

      // 일치 횟수를 키로 갖는 값을 증가 시킨다.
      lottoTicket.ticket.forEach((lotto) => {
        const matchesCount = comparator.countMatches(lotto.numbers);
        comparator.increaseMatchesCount(matchesCount);
      });

      expect(comparator.numOfWinningNumMatches.get(3)).toBe(2);
    }
  });

  test('로또 번호 5개와 보너스 번호가 일치할 경우를 구분할 수 있는가?', () => {
    const inputs = [['1,2,3,4,5,10', '6'], ['4,5,6,7,8,10', '9']];

    for (let i = 0; i < inputs.length; i += 1) {
      const comparator = new Comparator();
      lottoTicket.ticket.forEach((lotto) => {
        // 로또 티켓에 당첨번호와 보너스 번호 저장
        lottoTicket.saveSpecificTypeData('win', inputs[i][0]);
        lottoTicket.saveSpecificTypeData('bonus', inputs[i][1]);
        const matchesCount = comparator.countMatches(lotto.numbers);

        comparator.increaseBonusCount(matchesCount, lotto.numbers);
      });

      expect(comparator.numOfWinningNumMatches.get('bonus')).toBe(1);
    }
  });
});
