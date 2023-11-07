import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  money; // 로또 구입 금액
  lottoList = []; // 구입한 로또
  winningNumbers = []; // 당첨 번호
  bonusNumber; // 보너스 번호

  async checkMoney(inputtedMoney) {
    let result = true;
    try {
      if (isNaN(inputtedMoney))
        throw new Error("[ERROR] 숫자를 입력해야 합니다.");
      if (inputtedMoney <= 0)
        throw new Error("[ERROR] 1000원 이상 입력해야 합니다.");
      if (inputtedMoney % 1000 != 0)
        throw new Error("[ERROR] 1000 단위로 입력해야 합니다.");
    } catch (e) {
      result = false; // false 리턴
      MissionUtils.Console.print(e.message);
    }
    return result;
  }
  async readMoney() {
    // 로또 구입 금액 입력 UI
    while (true) {
      const inputtedMoney = await MissionUtils.Console.readLineAsync(
        `구입금액을 입력해 주세요.`
      );

      if (await this.checkMoney(inputtedMoney)) return inputtedMoney;
    }
  }
  async makeLotto() {
    let lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber.sort(function (a, b) {
      return a - b;
    });
    return lottoNumber;
  }
  async buyLotto(count) {
    MissionUtils.Console.print(`${count}개를 구매했습니다.`);
    let lottoList = [];
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto(await this.makeLotto());
      MissionUtils.Console.print(lotto.returnNumbersForPrint()); // 로또번호 출력
      lottoList.push(lotto);
    }
    return lottoList;
  }
  async checkWinningNum(inputtedWinningNum) {
    let result = true;
    const tmp = inputtedWinningNum.split(",").map(Number);
    try {
      const set = new Set(tmp);
      if (tmp.length !== 6 || tmp.length !== set.size)
        throw new Error("[ERROR] 중복없이 6자리를 입력해야 합니다.");
      for (let i = 0; i < tmp.length; i++) {
        if (isNaN(tmp[i]) || tmp[i] % 1 !== 0 || tmp[i] < 1 || tmp[i] > 45)
          throw new Error("[ERROR] 1~45인 정수만 입력해야 합니다.");
      }
    } catch (e) {
      result = false; // false 리턴
      MissionUtils.Console.print(e.message);
    }
    return result;
  }
  async readWinningNumbers() {
    while (true) {
      const inputtedWinningNum = await MissionUtils.Console.readLineAsync(
        `당첨 번호를 입력해 주세요.`
      );

      if (await this.checkWinningNum(inputtedWinningNum)) {
        return inputtedWinningNum.split(",").map(Number);
      }
    }
  }
  async checkBonusNum(winningNumbers, inputtedBonusNum) {
    let result = true;
    try {
      if (
        isNaN(inputtedBonusNum) ||
        Number(inputtedBonusNum) % 1 !== 0 ||
        Number(inputtedBonusNum) < 1 ||
        Number(inputtedBonusNum) > 45
      )
        throw new Error("[ERROR] 1~45인 정수만 입력해야 합니다.");
      if (winningNumbers.includes(Number(inputtedBonusNum)))
        throw new Error("[ERROR] 당첨 번호와 중복되는 수입니다.");
    } catch (e) {
      result = false; // false 리턴
      MissionUtils.Console.print(e.message);
    }
    return result;
  }
  async readBonusNumber() {
    while (true) {
      const inputtedBonusNum = await MissionUtils.Console.readLineAsync(
        `보너스 번호를 입력해 주세요.`
      );

      if (await this.checkBonusNum(this.winningNumbers, inputtedBonusNum))
        return Number(inputtedBonusNum);
    }
  }
  async calculateResult(lottoList, winningNumbers, bonusNumber) {
    let result = [0, 0, 0, 0, 0];
    for (let i = 0; i < lottoList.length; i++) {
      let tmp = await lottoList[i].countMatching(winningNumbers, bonusNumber);
      switch (tmp[0]) {
        case 3:
          result[0]++;
          break;
        case 4:
          result[1]++;
          break;
        case 5:
          if (!tmp[1]) result[2]++;
          else result[3]++;
          break;
        case 6:
          result[4]++;
          break;
      }
    }
    return result;
  }
  async calculateEarningRate(money, result) {
    let earning = 0;
    earning += 5000 * result[0];
    earning += 50000 * result[1];
    earning += 1500000 * result[2];
    earning += 30000000 * result[3];
    earning += 2000000000 * result[4];
    return ((earning / money) * 100).toFixed(1);
  }
  async printResult(money, lottoList, winningNumbers, bonusNumber) {
    MissionUtils.Console.print("당첨 통계\n---");
    const result = await this.calculateResult(
      lottoList,
      winningNumbers,
      bonusNumber
    );
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result[4]}개`);
    const earningRate = await this.calculateEarningRate(money, result);
    MissionUtils.Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
  async play() {
    this.money = await this.readMoney();
    this.lottoList = await this.buyLotto(this.money / 1000);
    this.winningNumbers = await this.readWinningNumbers();
    this.bonusNumber = await this.readBonusNumber();
    await this.printResult(
      this.money,
      this.lottoList,
      this.winningNumbers,
      this.bonusNumber
    );
  }
}

export default App;

const app = new App();
app.play();
