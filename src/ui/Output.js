import { Console } from '@woowacourse/mission-utils';
import { USER_OUTPUT } from '../constants/Logs';
import CONSTANTS from '../constants/Constants';

const printLottoTickets = lottoTickets => {
  const lottoPurchaseStatus = `${lottoTickets.length}${USER_OUTPUT.purchaseCountPrompt}`;
  const ticketLines = lottoTickets
    .map(ticket => `[${ticket.join(', ')}]`)
    .join('\n');
  Console.print(`\n${lottoPurchaseStatus}\n${ticketLines}`);
};
