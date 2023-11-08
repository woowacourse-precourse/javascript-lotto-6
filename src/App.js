import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    //구입 금액 입력받는 함수
    async function getUserCostInput() {
      MissionUtils.Console.print("구입금액을 입력해 주세요.");
      const totalCost = await MissionUtils.Console.readLineAsync("");

      //구입 금액 예외 처리 - 1) 숫자가 아닐 때
      if (isNaN(totalCost) === true) {
        throw new Error("[ERROR] 숫자를 입력해야 합니다.");
      }

      //구입 금액 예외 처리 - 2) 1000원 단위가 아닐 때
      if (Number(totalCost) % 1000 !== 0) {
        throw new Error("[ERROR] 1000원 단위 금액을 입력해야 합니다.");
      }
      return totalCost;
    }

    // 구매 개수 만큼 추첨 번호 생성 함수
    function makeNewLotto(boughtLottoCount) {
      const totalLottoNumList = [];
      for (let i = 0; i < boughtLottoCount; i++) {
        const nowLottoNumList = MissionUtils.Random.pickUniqueNumbersInRange(
          1,
          45,
          6
        );
        totalLottoNumList.push(nowLottoNumList);
      }
      return totalLottoNumList;
    }

    //로또 출력 함수
    function printNewLotto(boughtLottoCount, totalLottoNumList) {
      MissionUtils.Console.print(`${boughtLottoCount}개를 구매했습니다.`);
      totalLottoNumList.forEach((lotto) => MissionUtils.Console.print(lotto));
    }

    // 당첨 번호 입력 받는 함수
    async function getUserWinningNumInput() {
      MissionUtils.Console.print("당첨 번호를 입력해 주세요.");
      const winnigNum = await MissionUtils.Console.readLineAsync("");
      const winningNumList = winnigNum.split(",");
      return winningNumList;
    }

    // 보너스 번호 입력 받는 함수
    async function getUserBonusNumInput() {
      MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
      const bonusNum = await MissionUtils.Console.readLineAsync("");
      return bonusNum;
    }

    // 당첨 개수 및 금액 구하는 함수
    function calcTotalWinningCount(
      boughtLottoCount,
      totalLottoNumList,
      winningNumList
    ) {
      const totalWinningCount = [0, 0, 0, 0, 0, 0, 0, 0];
      let totalWinningMoney = 0;

      for (let j = 0; j < boughtLottoCount; j++) {
        let lotto = new Lotto(totalLottoNumList[j]);
        let tempWinningNum = lotto.checkWinningCount(winningNumList);
        let tempIsBonusTrue = lotto.isBonusTrue(bonusNum);
        let tempGetMoney = lotto.calcGetMoney(tempWinningNum, tempIsBonusTrue);
        totalWinningMoney += tempGetMoney;
        if (tempWinningNum === 5) {
          //5개 + 보너스 맞춘 경우 7번 인덱스에 저장
          if (tempIsBonusTrue) {
            totalWinningCount[7] += 1;
          }
        }
        totalWinningCount[tempWinningNum] += 1;
      }
      return [totalWinningCount, totalWinningMoney];
    }

    //당첨 개수 출력
    function printTotalNumber(totalWinningCount) {
      MissionUtils.Console.print(`당첨 통계`);
      MissionUtils.Console.print(`---`);
      MissionUtils.Console.print(
        `3개 일치 (5,000원) - ${totalWinningCount[3]}개`
      );
      MissionUtils.Console.print(
        `4개 일치 (50,000원) - ${totalWinningCount[4]}개`
      );
      MissionUtils.Console.print(
        `5개 일치 (1,500,000원) - ${totalWinningCount[5]}개`
      );
      MissionUtils.Console.print(
        `5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalWinningCount[7]}개`
      );
      MissionUtils.Console.print(
        `6개 일치 (2,000,000,000원) - ${totalWinningCount[6]}개`
      );
    }

    //당첨 수익률 계산
    function calcTotalProfitPercent(totalWinningMoney, totalCost) {
      const totalProfitPercent = (totalWinningMoney / totalCost) * 100;
      const temp = Number((Math.abs(totalProfitPercent) * 100).toPrecision(15));
      return (Math.round(temp) / 100) * Math.sign(totalProfitPercent);
    }

    const totalCost = await getUserCostInput();
    const boughtLottoCount = totalCost / 1000;
    const totalLottoNumList = makeNewLotto(boughtLottoCount);
    printNewLotto(boughtLottoCount, totalLottoNumList);
    const winningNumList = await getUserWinningNumInput();
    const bonusNum = await getUserBonusNumInput();
    const [totalWinningCount, totalWinningMoney] = calcTotalWinningCount(
      boughtLottoCount,
      totalLottoNumList,
      winningNumList
    );
    printTotalNumber(totalWinningCount);
    const totalProfit = calcTotalProfitPercent(totalWinningMoney, totalCost);

    //당첨 수익률 출력
    MissionUtils.Console.print(`총 수익률은 ${totalProfit}%입니다.`);
  }
}

export default App;
