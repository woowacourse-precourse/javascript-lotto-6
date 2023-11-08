import lottoController from './Controller/LottoContoller';

class App {
  async play() {
    await lottoController();
  }
}
export default App;
