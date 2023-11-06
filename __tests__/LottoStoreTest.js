import LottoStore from '../src/models/LottoStore.js';
import Lotto from './../src/models/Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('LottoStore', () => {
  let lottoStore;

  const mockNumbers = [6, 5, 3, 1, 4, 2];
  const sortedMockNumbers = [1, 2, 3, 4, 5, 6];

  beforeEach(() => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn(() => mockNumbers);
    const purchasedAmount = 1;
    lottoStore = new LottoStore(purchasedAmount);
  });

  test('createLottoTicket : 로또 티켓을 생성하고 정렬한다.', () => {
    const lottos = lottoStore.createLottoTicket();
    expect(lottos.getNumbers()).toEqual(sortedMockNumbers);
  });

  test('createLottoTickets : 올바른 티켓 수를 생성한다.', () => {
    const lottos = lottoStore.createLottoTickets();
    expect(lottos).toHaveLength(1);
  });
});
