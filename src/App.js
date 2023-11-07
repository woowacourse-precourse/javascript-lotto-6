import InputMoney from "./UI/InputMoney.js";
import PrintNumberOfLotto from "./UI/PrintNumberOfLotto.js";
import PrintPurchasedLottoResult from "./UI/PrintPurchasedLottoResult.js";
import InputLotto from "./UI/InputLotto.js";
import InputBonusNumber from "./UI/InputBonusNumber.js";

class App {
  async play() {
    const INPUT_MONEY = new InputMoney();
    const PRINT_NUMBER_OF_LOTTO = new PrintNumberOfLotto();
    const PRINT_PURCHASED_LOTTO_RESULT = new PrintPurchasedLottoResult();
    const INPUT_LOTTO = new InputLotto();
    const INPUT_BONUS_NUMBER = new InputBonusNumber();

    const NUMBER_OF_LOTTO = await INPUT_MONEY.inputMoney();

    PRINT_NUMBER_OF_LOTTO.printNumberOfLotto(NUMBER_OF_LOTTO);

    const PURCHASED_ARRAYS = [];

    for (let i = 0; i < NUMBER_OF_LOTTO; i++) {
      PURCHASED_ARRAYS.push(PRINT_PURCHASED_LOTTO_RESULT.result());
    }

    const LOTTO_NUMBER_ARRAY = await INPUT_LOTTO.lotto();

    const BONUS_NUMBER = await INPUT_BONUS_NUMBER.bonusNumber(
      LOTTO_NUMBER_ARRAY
    );
  }
}

export default App;
