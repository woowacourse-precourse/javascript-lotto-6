import { Console } from '@woowacourse/mission-utils';
import Counter from './Counter.js';
import { INPUT_MESSAGES } from './constants/messages.js';
import printLottoNumber from './print/printLottoNumber.js';

class App {
  async play() {
    const inputAmount = await Console.readLineAsync(INPUT_MESSAGES.inputAmount);
    const counter = new Counter(Number(inputAmount));
    const lottoTicketNumber = counter.lottoTicketNumber;
    const lottoBox = counter.giveLotto;
    printLottoNumber(lottoTicketNumber, lottoBox);
  }
}

export default App;
