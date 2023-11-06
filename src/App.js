import { MissionUtils, Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.getUserBuyCount();
  }
  async getUserBuyCount() {
    try {
      const userBuy = await Console.readLineAsync("구입금액을 입력해주세요.");
      if (userBuy % 1000 !== 0) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      this.lottoCount(userBuy);
    } catch (error) {
      console.error(error.message);
      this.getUserBuyCount();
    }
  }
  lottoCount(userBuy) {
    const userBuyLotto = userBuy / 1000;
    Console.print(`${userBuyLotto}개를 구매했습니다`);
    this.getUserNum();
  }
  async getUserNum() {
    const userNums = await Console.readLineAsync("당첨번호를 입력해주세요.");
    const userSixNums = userNums.split(",");
    // Console.print(userSixNums);
    this.checkUserNum(userSixNums);
  }
  checkUserNum(userSixNums) {
    try {
      const set = new Set(userSixNums);
      for (let i = 0; i < userSixNums.length; i++) {
        if (
          userSixNums[i] > 45 ||
          userSixNums[i] < 1 ||
          userSixNums.length !== 6 ||
          userSixNums.length !== set.size // 중복된 숫자 확인
        ) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
      this.getUserBonusNum();
    } catch (error) {
      console.error(error.message);
      this.getUserNum();
    }
  }
  async getUserBonusNum() {
    const userBonus = await Console.readLineAsync(
      "보너스 번호를 입력해주세요."
    );
    this.checkBonusNum(userBonus);
  }
  checkBonusNum(userBonus) {
    try {
      for (let i = 0; i < userBonus.length; i++) {
        if (userBonus[i] > 45 || userBonus[i] < 1) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
    } catch (error) {
      console.error(error.message);
      this.getUserBonusNum();
    }
  }
}
const app = new App();
app.play();

export default App;
