import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import InputPrice from "./InputPrice.js";

class App {
  async play() {
    const budgetInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const budgetPrice = new InputPrice(budgetInput);
    budgetPrice.validate(budgetInput)
    const numLotto = budgetPrice.calculateLottoCount(budgetInput);
    printLotto(numLotto);
  }
}

function makeLotto() {
  const computer = [];
  while (computer.length < 6) {
    const number = Random.pickNumberInRange(1, 45);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.sort();
}

function printLotto(numLotto) {
  Console.print("");
  Console.print(String(numLotto) + "개를 구매했습니다.")
  for (let i = 0; i < numLotto; i++) {
    Console.print(makeLotto())
  }
  Console.print("");
}

export default App;
