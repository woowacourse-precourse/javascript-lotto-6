import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from "./Lotto.js";
class App {
  async play() {
    const { numbers, bonusNumber } = Lotto.createRandomNumbers();
    const lotto = new Lotto(numbers, bonusNumber);
    const lottoNumber = lotto.getNumbers();
    const lottoBonusNumber = lotto.getBonusNumber();

    Console.print(`로또 번호: ${lottoNumber}`);
    Console.print(`보너스 번호: ${lottoBonusNumber}`);
  }
}

const app = new App();
app.play();

export default App;
