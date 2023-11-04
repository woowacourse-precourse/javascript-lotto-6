import { Console } from '@woowacourse/mission-utils';

const printLottoNumber = (lottoTicketNumber, lottoBox) => {
  Console.print(OUTPUT_MESSAGES.lottoTicketNumber(lottoTicketNumber));
  lottoBox.forEach((lotto) => Console.print(lotto.numbers));
  Console.print(' ');
};

export default printLottoNumber;
