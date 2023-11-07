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
  const randomLotto = [];
  while (randomLotto.length < 6) {
    const number = Random.pickNumberInRange(1, 45);
    if (!randomLotto.includes(number)) {
      randomLotto.push(number);
    }
  }
  // 배열을 오름차순으로 정렬
  randomLotto.sort((a, b) => a - b)
  return randomLotto;
}

// 랜덤 로또 번호 출력과 저장
function printLotto(numLotto) {
  const randomLottoArr = []
  Console.print("");
  Console.print(String(numLotto) + "개를 구매했습니다.")
  for (let i = 0; i < numLotto; i++) {
    Console.print(makeLotto())
    randomLottoArr.push(makeLotto())
  }
  Console.print("");
  return randomLottoArr;
}

export default App;
