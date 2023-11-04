import { Console } from '@woowacourse/mission-utils';
import LottoGame from './LottoGame.js';

class App {
  async play() {
    const price = await Console.readLineAsync('구입금액을 입력해 주세요.');
    const lottoGame = new LottoGame(price);

    Console.print(`${lottoGame.count}개를 구매했습니다.`);
   
  }

}

export default App;
