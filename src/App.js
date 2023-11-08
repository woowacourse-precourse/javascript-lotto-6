import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    let money = await this.inputMoney();
  }
  async inputMoney() {
    let money = await Console.readLineSync;
    ("구입할 로또 금액을 입력해주세요");
  }
}

export default App;
