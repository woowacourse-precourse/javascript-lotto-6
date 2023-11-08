import Host from './Host.js';
import Statistics from './Statistics.js';
import Vendor from './Vendor.js';

class App {
  async play() {
    const vendor = new Vendor();
    const paid = await vendor.recieveMoney();
    const tickets = vendor.issueTickets(paid);

    const host = new Host();
    const winningNumbers = await host.getWinningNumbers();
    const lotto = await host.enrollLotto(winningNumbers);
    const bonusNumber = await host.getBonusNumber(winningNumbers);

    const prize = lotto.printResult(tickets, bonusNumber);
    Statistics.printRateOfReturn(paid, prize);
  }
}

export default App;
