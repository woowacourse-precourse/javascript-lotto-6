import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const budget = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const lottoCount = buyLotto(budget);
    let lottoTickets = [];

    for (let i=0; i<lottoCount; i++){
      lottoTickets.push(getLottoTicket())
    }

    const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.");

    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
  }
}

export default App;

const buyLotto = (budget) => {
  if (budget%1000>0) throw new Error("[Error] 구입금액은 1000단위여야 합니다.");
  return budget/1000
}

const getLottoTicket = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
}