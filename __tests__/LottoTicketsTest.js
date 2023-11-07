import Lotto from '../src/Lotto.js';
import LottoTickets from '../src/model/LottoTickets.js';

describe('💙 LottoTickets 클래스를 테스트합니다. ฅ^._.^ฅ', () => {
  let lottoTickets;
  const mockLottoInstances = [];
  const winningNumbers = [1, 2, 3, 4, 5, 7];

  beforeEach(() => {
    lottoTickets = new LottoTickets();
    const mockLottos = [
      [1, 2, 3, 7, 8, 9],
      [2, 3, 4, 8, 9, 10],
    ];

    mockLottos.forEach((mockLotto) => {
      const lottoInstance = new Lotto(mockLotto);
      lottoTickets.addLotto(lottoInstance);
      mockLottoInstances.push(lottoInstance);
    });
  });

  test('[getLottoTicket] 지정된 인덱스의 로또 인스턴스를 반환한다', () => {
    expect(lottoTickets.getLottoTicket(0)).toEqual(mockLottoInstances[0]);
  });

  test('[getLottoTicket] 유효하지 않은 인덱스에 대해 null을 반환한다', () => {
    expect(lottoTickets.getLottoTicket(-1)).toBeNull();
  });

  test('[getWinningNumberMatchCount] 당첨 번호와 일치하는 각 로또의 일치 번호 수를 배열로 반환한다', () => {
    const matchCounts = lottoTickets.getWinningNumberMatchCount(winningNumbers);
    expect(matchCounts).toEqual([4, 3]);
  });

  test('[includesBonusNumber] 각 로또가 보너스 번호를 포함하는지 여부를 배열로 반환한다', () => {
    const bonusNumber = 7;
    const bonusMatches = lottoTickets.includesBonusNumber(bonusNumber);
    expect(bonusMatches).toEqual([true, false]);
  });
});
