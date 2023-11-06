import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGES } from '../constants/messages.js';
import printEachLotto from './printEachLotto.js';

const printLottoNumbers = (lottoTicketNumber, lottoBox) => {
  Console.print(OUTPUT_MESSAGES.lottoTicketNumber(lottoTicketNumber));

  lottoBox.forEach((lotto) => printEachLotto(lotto));
};

export default printLottoNumbers;
