import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {

  // 로또 살 돈을 입력받는 함수
  async lottoBudget() {
    const budgetInput = await Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    if (budgetInput % 1000 !== 0 || budgetInput <= 0) {
      throw new Error("[ERROR]")
    } else if (isNaN(parseInt(budgetInput))) {
      throw new Error("[ERROR]")
    }
  }

  //랜덤 로또 만드는 함수 
  makeLotto() {
    const computer = [];
    while (computer.length < 6) {
      const number = Random.pickNumberInRange(1, 45);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }
  async play() {
    this.lottoBudget();
    const lottoNumber = this.makeLotto();
  }
}

export default App;

const app = new App()
app.play()