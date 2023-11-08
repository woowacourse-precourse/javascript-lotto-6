import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import InputPriceValidation from "./InputPriceValidation.js";
import InputBonusValidation from "./InputBonusValidation.js";
import { printLotto } from "./MakeLotto.js";
import { matchLotto } from "./MatchLotto.js";
import { matchResult } from "./MatchResult.js";
import { printResult } from "./PrintResult.js";

class App {
  async play() {
    const randomLottoArr = await InputPrice();
    const lottoNumber = await InputLotto();
    const bonus = await InputBonus(lottoNumber);
    const matchList = matchLotto(randomLottoArr[0], lottoNumber, bonus);
    const resultList = matchResult(matchList);
    printResult(resultList, randomLottoArr[1]);
  }
}

//UI 로직
async function InputPrice() {
  while (true) {
    try {
      const budgetInput = await Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      const budgetPrice = new InputPriceValidation(budgetInput);
      budgetPrice.validate(budgetInput);
      const numLotto = budgetPrice.calculateLottoCount(budgetInput);
      Console.print("");
      const randomLottoArr = printLotto(numLotto);
      return [randomLottoArr, budgetInput];

    } catch (error) {
      Console.print(`${error.message}`);
    }
  }
}

async function InputLotto() {
  while (true) {
    try {
      const lottoInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      const lottoNumber = lottoInput.split(",");
      const lotto = new Lotto(lottoNumber);
      lotto.getValidate();
      Console.print("");
      return lottoNumber;

    } catch (error) {
      Console.print(`${error.message}`);
    }
  }
}

async function InputBonus(lottoNumber) {
  while (true) {
    try {
      const bonusInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
      const bonus = new InputBonusValidation(bonusInput, lottoNumber);
      bonus.validate(bonusInput, lottoNumber);
      Console.print("");
      return bonusInput;
    } catch (error) {
      Console.print(`${error.message}`);
    }
  }
}

export default App;
