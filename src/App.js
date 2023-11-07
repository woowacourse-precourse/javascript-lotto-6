import Result from './Result.js';
import input from './userInput.js'
import LottoTickets from './LottoTicket.js';

class App {
  async play() {
    const purchaseAmount = await input.inputPurchaseAmount();
    const lottoTickets = LottoTickets.getLottoTickets(purchaseAmount);

    const winningNumbers = await input.inputWinningNumbers();
    const bonusNumber = await input.inputBonusNumber();

    const result = Result.calculateResults(lottoTickets, winningNumbers, bonusNumber);
    Result.printResults(result);
  }
}

export default App;
