import Lotto from './Lotto.js';
import Vendor from './Vendor.js';
import InputView from './views/InputView.js';

class App {
  async play() {
    const vendor = new Vendor();
    const tickets = await vendor.isssueTickets();
    const winningNumbers = await InputView.getWinningNumbers();
    const lotto = new Lotto(winningNumbers);
    const bonusNumber = await InputView.getBonusNumber(winningNumbers);
    lotto.getResult(tickets, bonusNumber);
  }
}
// const app = new App();
// app.play();
export default App;
