import InputMoney from "./UI/InputMoney.js";
import PrintNumberOfLotto from "./UI/PrintNumberOfLotto.js";
import PrintPurchasedLottoResult from "./UI/PrintPurchasedLottoResult.js";
import InputLotto from "./UI/InputLotto.js";
import InputBonusNumber from "./UI/InputBonusNumber.js";
import LottoNumberMatch from "./Domain/LottoNumberMatch.js";
import PrintResult from "./UI/PrintResult.js";
import CalculateRateOfReturn from "./Domain/CalculateRateOfReturn.js";

class App {
  async play() {
    const INPUT_MONEY = new InputMoney();
    const PRINT_NUMBER_OF_LOTTO = new PrintNumberOfLotto();
    const PRINT_PURCHASED_LOTTO_RESULT = new PrintPurchasedLottoResult();
    const INPUT_LOTTO = new InputLotto();
    const INPUT_BONUS_NUMBER = new InputBonusNumber();
    const LOTTO_NUMBER_MATCH = new LottoNumberMatch();
    const PRINT_RESULT = new PrintResult();
    const CALCULATE_RATE_OF_RETURN = new CalculateRateOfReturn();

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

    const RANK_MATCH_ARRAY = LOTTO_NUMBER_MATCH.matchResult(
      PURCHASED_ARRAYS,
      LOTTO_NUMBER_ARRAY,
      BONUS_NUMBER
    );

    PRINT_RESULT.print(RANK_MATCH_ARRAY);

    const RATE_OF_RETURN = CALCULATE_RATE_OF_RETURN.calculate(
      RANK_MATCH_ARRAY,
      NUMBER_OF_LOTTO
    );
  }
}

export default App;
