import { MissionUtils } from '@woowacourse/mission-utils';
import PurchaseAmount from '../../../src/Domain/Purchase/PurchaseAmount.js';

describe('PurchaseAmount', () => {
  let purchaseAmount;
  let lottoTickets;

  beforeEach(() => {
    lottoTickets = {
      generateLottoTickets: jest.fn().mockImplementation((ticketCount) => {
        const tickets = [];
        for (let i = 0; i < ticketCount; i++) {
          tickets.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
        }
        return tickets;
      }),
    };
    purchaseAmount = new PurchaseAmount(lottoTickets);
  });

  afterEach(() => jest.clearAllMocks());

  describe('purchaseLottoTickets', () => {
    test('입력한 로또 티켓 개수 만큼 로또 티켓을 생성하는지 테스트', () => {
      const ticketCount = 4;

      const tickets = purchaseAmount.purchaseLottoTickets(ticketCount);

      expect(tickets.length).toBe(ticketCount);
      expect(lottoTickets.generateLottoTickets).toHaveBeenCalledWith(ticketCount);
    });
  });

  describe('purchaseLotto', () => {
    test('입력한 구매 금액 만큼 티켓의 개수를 구해서 로또 티켓을 생성하는지 테스트', () => {
      const purchaseAmountValue = 10000;
      const expectedTicketCount = purchaseAmountValue / 1000;

      const tickets = purchaseAmount.purchaseLotto(purchaseAmountValue);

      expect(tickets.length).toBe(expectedTicketCount);
      expect(lottoTickets.generateLottoTickets).toHaveBeenCalledWith(expectedTicketCount);
    });
  });
});
