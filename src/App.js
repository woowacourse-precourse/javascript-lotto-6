import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const budget = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

    const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.");

    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    
  }

  
}

export default App;
