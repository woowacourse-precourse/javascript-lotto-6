import lottoGame from './controller/LottoGame';
class App {
  async play() {
    await lottoGame();
  }
}

export default App;
