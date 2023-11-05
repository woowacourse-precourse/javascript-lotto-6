import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constant/lottoConstants';

class LottoViewer {
  static purchasedLottos(lottoTickets) {
    const ticketsString = lottoTickets
      .map((lotto) => `[${lotto.join(', ')}]`)
      .join('\n');

    Console.print(`${lottoTickets.length}${MESSAGE.PURCHASED}\n${ticketsString}`);
  }
}

export default LottoViewer;
