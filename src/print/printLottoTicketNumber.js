import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';

const printLottoTicketNumber = (lottoTicketNumber) => {
  Console.print(OUTPUT_MESSAGES.lottoTicketNumber(lottoTicketNumber));
};

export default printLottoTicketNumber;
