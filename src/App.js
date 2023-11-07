import InputMoney from "./UI/InputMoney.js";
import PrintNumberOfLotto from "./UI/PrintNumberOfLotto.js";

class App {
  async play() {
    const INPUT_MONEY = new InputMoney();
    const PRINT_NUMBER_OF_LOTTO = new PrintNumberOfLotto();

    const NUMBER_OF_LOTTO = await INPUT_MONEY.inputMoney();

    PRINT_NUMBER_OF_LOTTO.printNumberOfLotto(NUMBER_OF_LOTTO);
  }
}

export default App;
