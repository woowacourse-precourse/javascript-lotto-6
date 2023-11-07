import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import InputPrice from "./InputPrice.js";
import InputBonus from "./InputBonus.js";

class App {
  async play() {
    const budgetInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const budgetPrice = new InputPrice(budgetInput);
    budgetPrice.validate(budgetInput)
    const numLotto = budgetPrice.calculateLottoCount(budgetInput);
    Console.print("");

    const randomLottoArr = printLotto(numLotto);

    const lottoInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const lottoNumber = lottoInput.split(",");
    const lotto = new Lotto(lottoNumber);
    lotto.getValidate();

    Console.print("");
    const bonusInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    const bonus = new InputBonus(bonusInput, lottoNumber);
    bonus.validate(bonusInput, lottoNumber);
  }
}

// 랜덤 로또 번호 생성
function makeLotto() {
  const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
  randomLotto.sort((a, b) => a - b);
  return randomLotto;
}

// 랜덤 로또 번호 출력과 저장
function printLotto(numLotto) {
  Console.print(String(numLotto) + "개를 구매했습니다.")
  const randomLottoArr = []
  for (let i = 0; i < numLotto; i++) {
    const lottoNumbers = makeLotto();
    Console.print("[" + lottoNumbers.join(", ") + "]");
    randomLottoArr.push(lottoNumbers);
  }
  Console.print("");
  return randomLottoArr;
}

export default App;
