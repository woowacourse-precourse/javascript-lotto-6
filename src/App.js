import Customer from './Customor.js';
import LottoMachine from './LottoMachine.js';
class App {
  async play() {
    const customer = new Customer();
    await customer.buyLotto();
    const lottoMachine = new LottoMachine();
    await lottoMachine.setWinningNumbers();
    await lottoMachine.setBonusNumber();
    lottoMachine.checkLottoResult(customer.getLottoBundle());
  }
}

export default App;
