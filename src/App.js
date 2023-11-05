import { Console } from '@woowacourse/mission-utils';
import Counter from './Counter.js';
import { INPUT_MESSAGES } from './constants/messages.js';
import WinningLottoMachine from './WinningLottoMachine.js';
import printLottoNumbers from './print/printLottoNumbers.js';

class App {
  async play() {
    const inputAmount = await Console.readLineAsync(INPUT_MESSAGES.inputAmount);
    const counter = new Counter(Number(inputAmount));
    const lottoTicketNumber = counter.lottoTicketNumber;
    const lottoBox = counter.giveLotto;
    await printLottoNumbers(lottoTicketNumber, lottoBox);

    const winningLottoMachine = await WinningLottoMachine.machineStart();
    const winningNumbers = winningLottoMachine.winningNumbers;
    const bonusNumber = winningLottoMachine.bonusNumber;
  }
}

export default App;
