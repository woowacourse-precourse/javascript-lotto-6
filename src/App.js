import InputMoney from "./UI/InputMoney.js";

class App {
  async play() {
    const INPUT_MONEY = new InputMoney();

    const NUMBER_OF_LOTTO = await INPUT_MONEY.inputMoney();
  }
}

export default App;
