import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from "./Lotto.js";
class App {
  async play() {
    const numbers = Lotto.createRandomNumbers();
    const bonusNumber = Lotto.generateBonusNumber(numbers);
    const lotto = new Lotto(numbers, bonusNumber);
    const lottoNumber = lotto.getNumbers();
    Console.print(`로또 번호: ${lottoNumber}`);
    Console.print(`보너스 번호: ${bonusNumber}`);
  }
}

const app = new App();
app.play();

export default App;
