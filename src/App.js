import Host from './Host.js';
import Statistics from './Statistics.js';
import Vendor from './Vendor.js';

class App {
  async play() {
    const vendor = new Vendor();
    const paid = await vendor.recieveMoney();
    const tickets = vendor.issueTickets(paid);

    const host = new Host();
    const lotto = await host.enrollWinningNumbers();
    const bonusNumber = await host.getBonusNumber();
    const prize = lotto.printResult(tickets, bonusNumber);
    Statistics.printRateOfReturn(paid, prize);
  }
}

const app = new App();
app.play();

export default App;
