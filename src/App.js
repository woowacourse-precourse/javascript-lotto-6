import View from "./View.js";
class App {
  async play() {
    const inputMoney = await View.askInputMoney();
    console.log(inputMoney);
  }
}

export default App;
