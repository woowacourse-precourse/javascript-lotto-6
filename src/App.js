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
    for (let i = 0; i < winningNumbers.length; i++) {
      if (isNaN(purchaseAmount)) {
        throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
      }
      winningNumbers[i] = parseInt(winningNumbers[i]);
    }

    Console.print("");
    Console.print("보너스 번호를 입력해 주세요.");
    let bonusNumber = await Console.readLineAsync("");
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
    bonusNumber = parseInt(bonusNumber);

    const lottoResult = [0, 0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < lottoInstances.length; i++) {
      lottoResult[
        lottoInstances[i].checkWinStatus(winningNumbers, bonusNumber)
      ]++;
    }

    Console.print("");
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${lottoResult[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResult[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResult[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult[7]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult[6]}개`);

    // 당첨금 / 구입금액
  }
}

export default App;
