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

  // 총 당첨 내역 출력
    // 결과 합산
  computeTotalResult(lottos, winningNumbers, bonusNubmer) {
    const result = { "1등": 0, "2등": 0, "3등": 0, "4등": 0, "5등": 0, "꽝": 0};
    for (const lotto of lottos) {
      const rank = this.computeRank(lotto, winningNumbers, bonusNubmer);
      result[rank]++;
    }
    return result;
  }

    // 출력
  printResult(result) {
    MissionUtils.Console.print(`
당첨 통계\n---
3개 일치 (5,000원) - ${result["5등"]}개
4개 일치 (50,000원) - ${result["4등"]}개
5개 일치 (1,500,000원) - ${result["3등"]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["2등"]}개
6개 일치 (2,000,000,000원) - ${result["1등"]}개`);
  }

  // 수익률 계산
  
  computeProfit(result,money){
    const totalPrize = result["5등"]*5000 + result["4등"]*50000 + result["3등"]*1500000 + result["2등"]*30000000 + result["1등"]*2000000000;
    const profit = (totalPrize/money*100).toFixed(1);
    return profit;  
  }
  
  printProfit(profit){
    MissionUtils.Console.print(`총 수익률은 ${profit}%입니다.`);
  }
  }
}

export default App;
