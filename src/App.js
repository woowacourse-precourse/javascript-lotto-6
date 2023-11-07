import Lotto from './Lotto.js';

class App {
  async play() {
    const lotto = new Lotto();
    await lotto.buy();
    console.log('\n');
    await lotto.setWinningNumbers();
    lotto.printResult();
  }
}

export default App;
