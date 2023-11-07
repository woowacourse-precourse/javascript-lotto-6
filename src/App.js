import { Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    const money = await inputMoney();
    let lottoTicket = printTiceks(money);
  }
}
export default App;
const app = new App();
app.play();
