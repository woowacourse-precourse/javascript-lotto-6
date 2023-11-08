import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  async play() {
    MissionUtils.Console.print("구입금액을 입력해 주세요.");
    const purchaseAmount = await MissionUtils.Console.readLineAsync();
    this.purchaseAmountValidation(purchaseAmount);

    const PurchaseQuantity = purchaseAmount / 1000;
    const lottos = this.generateLottoNumbers(PurchaseQuantity);
    this.printLottos(lottos);

    MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
    const winningNumbers = await MissionUtils.Console.readLineAsync();
    const winningNumbersArr = this.parseNumbers(winningNumbers);

    MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    const bonusNumber = await MissionUtils.Console.readLineAsync();
    const bonusNumberInt = parseInt(bonusNumber);

    const result = this.calculateResult(lottos, winningNumbersArr, bonusNumberInt);

    MissionUtils.Console.print("\n 당첨 통계 \n --- ");

    this.printResult(result, purchaseAmount);
  }

  // 로또 구입 금액 유효성 검사
  purchaseAmountValidation(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      MissionUtils.Console.print("[ERROR] 금액은 1000원 단위로 입력해주세요.");
      return false;
    }
  }

  // 로또 번호 생성
  generateLottoNumbers(PurchaseQuantity) { 
    const lottos = [];
    for (let i = 0; i < PurchaseQuantity; i++) {
      lottos.push(new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
    return lottos;
  }

  printLottos(lottos) {
    MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  parseNumbers(numbers) {
    return numbers.split(",").map((number) => parseInt(number));
  }

  calculateResult(lottos, winningNumbers, bonusNumber) {
    const results = {
      3 : 0, 4 : 0, 5 : 0, 5.1 : 0, 6 : 0,
    };

    lottos.forEach((lotto) => {
      const matchedNumbers = lotto.matchedNumbers(winningNumbers);
      const matchedBonus = lotto.matchedBonusNumber(bonusNumber);

      if(matchedNumbers === 6) {
        results[6]++;
        return;
      }
      if(matchedNumbers === 5 && matchedBonus) {
        results[5.1]++;
        return;
      }
      results[matchedNumbers]++;
    });
    return results;
  }

  printResult(results, purchaseAmount) {
    MissionUtils.Console.print("3개 일치 (5,000원) - " + results[3] + "개");
    MissionUtils.Console.print("4개 일치 (50,000원) - " + results[4] + "개");
    MissionUtils.Console.print("5개 일치 (1,500,000원) - " + results[5] + "개");
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[5.1]}개`);
    MissionUtils.Console.print("6개 일치 (2,000,000,000원) - " + results[6] + "개");

    const totalPrize =
      results[3] * 5000 +
      results[4] * 50000 +
      results[5] * 1500000 +
      results[5.1] * 30000000 +
      results[6] * 2000000000;
  
      const totalRateOfReturn = ((totalPrize / purchaseAmount) * 100).toFixed(1);
      MissionUtils.Console.print(`총 수익률은 ${totalRateOfReturn}%입니다.`);

  }

}





export default App;
