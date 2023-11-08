import lottoController from "./Controller/LottoContoller.js";

class App {
  async play() {
    await lottoController();
  }
}
export default App;
