import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { createLottoInstances } from "./CreateLotto.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    Console.print("구입금액을 입력해 주세요.");
    let purchaseAmount = await Console.readLineAsync("");
    if (isNaN(purchaseAmount)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
    purchaseAmount = parseInt(purchaseAmount);
    if (purchaseAmount < 1000) {
      throw new Error("[ERROR] 최소 구매금액은 1000원입니다.");
    }

    Console.print("");
    Console.print(`${purchaseAmount / 1000}개를 구매했습니다.`);
    const lottoInstances = createLottoInstances(purchaseAmount / 1000);

    for (let i = 0; i < lottoInstances.length; i++) {
      lottoInstances[i].showNumber();
    }

    Console.print("");
    Console.print("당첨 번호를 입력해 주세요.");
    let winningNumbers = await Console.readLineAsync("");
    winningNumbers = winningNumbers.split(",");
    // console.log(winningNumbers);
    for (let i = 0; i < winningNumbers.length; i++) {
      if (isNaN(purchaseAmount)) {
        throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
      }
      winningNumbers[i] = parseInt(winningNumbers[i]);
    }
    // console.log(winningNumbers);

    Console.print("");
    Console.print("보너스 번호를 입력해 주세요.");
    let bonusNumber = await Console.readLineAsync("");
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
    bonusNumber = parseInt(bonusNumber);

    for (let i = 0; i < lottoInstances.length; i++) {
      console.log(
        lottoInstances[i].checkWinStatus(winningNumbers, bonusNumber)
      );
    }
  }
}

export default App;
