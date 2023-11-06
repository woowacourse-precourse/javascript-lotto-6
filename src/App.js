import LottoMachine from './\bDomain/LottoMachine';
class App {
  async play() {
    const lotto = new LottoMachine();
    await lotto.purchaseLotto();
  }
}

export default App;
