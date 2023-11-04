import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    let lottoMoney = await inputMoney();
  }
}

async function inputMoney() {
  let money = await MissionUtils.Console.readLineAsync('구입금액을 입력해주세요.\n');
  money = parseInt(money);
  return money
}

export default App;
