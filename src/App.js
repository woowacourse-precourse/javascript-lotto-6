import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  // 구입 금액 입력받기
  async inputMoney() {
    const money = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
    }
    return money;
  }
  // 로또 발행
  publishLotto(money) {
    const lottoCount = money / 1000;
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      lottos.push(randomNumbers);
    }
    return lottos;
  }
  // 구매한 로또 수량 및 번호 출력
  printLottos(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
  // 당첨 번호 입력받기
  async inputNumbers() {
    const inputString = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해주세요.\n"
    );
    const numbers = inputString
      .split(",")
      .map((number) => Number(number.trim()));
    return numbers;
  }

  // 보너스 번호 입력받기
  async inputBonusNumber() {
    const inputString = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해주세요.\n"
    );
    const bonusNumber = Number(inputString.trim());
    return bonusNumber;
  }

  // 로또 하나에 대한 결과(등수) 계산

    // 일치하는 번호 개수
  countMatchingNumbers(lotto, winningNumbers) {
    let count = 0;
    lotto.forEach((number) => {
      if (winningNumbers.includes(number)) {
        count++;
      }
    });
    return count;
  }
    // 등수 계산
  computeRank(lotto, winningNumbers, bonusNumber) {
    const count = this.countMatchingNumbers(lotto, winningNumbers);
    switch (count) {
      case 6:
        return "1등";
      case 5:
        if (winningNumbers.includes(bonusNumber)) {
          return "2등";
        } else return "3등";
      case 4:
        return "4등";
      case 3:
        return "5등";
      default:
        return "꽝";
    }
  }
  }
}

export default App;
