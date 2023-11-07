import { buycount } from './Input/buycount.js';
import { Console } from '@woowacourse/mission-utils';
import { lottoprint } from './output/Lottoprint.js';
import Lotto from './Lotto.js';
import { bonus } from './input/Bonus.js';
import { winningnum } from './Game/WinningNum.js';
import { winningprint } from './Output/WinningPrint.js';

class App {
  // prettier-ignore
  async play() {
    const buyinput = await buycount();
    Console.print(`${buyinput}개를 구매했습니다`);
    const arrary = lottoprint(buyinput);
    const lottonum = new Lotto([1,2,3,4,5,6]);
    await lottonum.lottoplay();
    const bonusnum = await bonus(lottonum);
    const output = winningnum(arrary, bonusnum);
    winningprint(output);
  }
}

export default App;
