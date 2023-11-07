import Lotto from './Lotto.js';

class App {
  async play() {
    const lotto = new Lotto();
    await lotto.buy();
    console.log('\n');
    await lotto.setWinningNumbers();
    lotto.getResult();
    lotto.printPrize();
    lotto.printRateOfRevenue();
  }
}

export default App;
