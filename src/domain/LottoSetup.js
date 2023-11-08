import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/Constants';

function createLottoTicket() {
  const lottoTicket = Random.pickUniqueNumbersInRange(
    CONSTANTS.minRange,
    CONSTANTS.maxRange,
    6,
  ).sort((a, b) => a - b);
  return lottoTicket;
}

export default function createLottoTickets(purchaseAmount) {
  const lottoTickets = [];
  for (let ticketCount = 0; ticketCount < purchaseAmount; ticketCount += 1) {
    lottoTickets.push(createLottoTicket());
  }
  return lottoTickets;
}
