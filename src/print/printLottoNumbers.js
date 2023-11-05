import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';

const printLottoNumbers = async (lottoTicketNumber, lottoBox) => {
  Console.print(OUTPUT_MESSAGES.lottoTicketNumber(lottoTicketNumber));
  lottoBox.forEach((lotto) => Console.print(lotto.numbers));
  Console.print(' ');
};

export default printLottoNumbers;
