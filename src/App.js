import { Console } from '@woowacourse/mission-utils';
import LottoGame from './LottoGame.js';

class App {
  async play() {
    const price = await Console.readLineAsync('구입금액을 입력해 주세요.');
    const lottoGame = new LottoGame(price);

  }

}

export default App;
