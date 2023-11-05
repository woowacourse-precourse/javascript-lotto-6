import { MissionUtils } from "@woowacourse/mission-utils";

class App {
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
  async readMoney() { // 로또 구입 금액 입력 UI
    while (true) {
      const inputtedMoney = await MissionUtils.Console.readLineAsync(
        `구입금액을 입력해 주세요.`
      );

      if (await this.checkMoney(inputtedMoney)) return inputtedMoney;
    }
  }

  async play() { // 
    const inputtedMoney = await this.readMoney();
    MissionUtils.Console.print(inputtedMoney);

    // MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    //
  }
}

export default App;

const app = new App();
app.play();
