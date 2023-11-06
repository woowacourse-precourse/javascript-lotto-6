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
      MissionUtils.Console.print(lotto.returnNumbers()); // 로또번호 출력
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

      if (await this.checkBonusNum(this.winningNumbers, inputtedBonusNum)) return inputtedBonusNum;
    }
  }

  async play() {
    this.money = await this.readMoney();
    this.lottoList = await this.buyLotto(this.money / 1000);
    this.winningNumbers = await this.readWinningNumbers();
    this.bonusNumber = await this.readBonusNumber();
  }
}

export default App;

const app = new App();
app.play();
