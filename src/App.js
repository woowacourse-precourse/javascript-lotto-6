import { MissionUtils, Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.getUserNumbers();
  }
  async getUserNumbers() {
    try {
      const userNumbers = await Console.readLineAsync(
        "구입금액을 입력해주세요."
      );
      if (userNumbers % 1000 !== 0) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    } catch (error) {
      console.error(error.message);
      this.getUserNumbers();
    }
  }
}
const app = new App();
app.play();

export default App;
