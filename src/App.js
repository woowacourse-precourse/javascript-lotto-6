import MyConsole from './Console.js';
import utility from './utility.js';

class App {
  constructor() {
    this.console = new MyConsole();
  }

  async play() {
    const input = await this.console.readLineAsync('구입금액을 입력해 주세요.');
    utility.validateInput(input);
    const money = utility.changeStringToNumber(input);
    const amount = utility.getLottoAmount(money);
    this.console.log(`${amount}개를 구매했습니다.`);
    const lottos = utility.generateLottos(amount);
  }
}

export default App;
