import View from "./View.js";
class App {
  async play() {
    const viewLotto = new View();
    await viewLotto.askInputMoney();
  }
}

export default App;
