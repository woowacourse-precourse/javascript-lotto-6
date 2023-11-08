import { MissionUtils } from '@woowacourse/mission-utils';
import { STRINGS } from './constants/STRINGS';
class App {
  async play() {}
  async play() {
    this.startGame();
  }

  async startGame() {
      
  }

  async getLottoAmount(){
    const INPUT_LOTTO_AMOUNT = await MissionUtils.Console.readLineAsync(STRINGS.PAY_INPUT);
    return this.countLottoAmount(INPUT_LOTTO_AMOUNT);
  }

}

export default App;
