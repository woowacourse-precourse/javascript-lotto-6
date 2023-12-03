import Lotto from './Lotto.js';
import Vendor from './Vendor.js';
import InputView from './views/InputView.js';

class App {
  async play() {
    const vendor = new Vendor();
    await vendor.isssueTickets();
    const winningNumbers = await InputView.getWinningNumbers();
    const lotto = new Lotto(winningNumbers);
  }
}
const app = new App();
app.play();
export default App;
