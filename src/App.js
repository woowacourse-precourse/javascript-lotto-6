import { buycount } from './Input/buycount.js';
import { Console } from '@woowacourse/mission-utils';
import { lottoprint } from './Output/LottoPrint.js';
import Lotto from './Lotto.js';
import { bonus } from './Input/Bonus.js';
import { winningnum } from './Game/WinningNum.js';
import { winningprint } from './Output/WinningPrint.js';
import { rateprint } from './Output/RatePrint.js';

class App {
  // prettier-ignore
  async play() {
    const buyinput = await buycount();
    Console.print(`\n${buyinput}개를 구매했습니다.`);
    const arrary = lottoprint(buyinput);
    const lottonum = new Lotto([1,2,3,4,5,6]);
    await lottonum.lottoplay();
    const bonusnum = await bonus(lottonum);
    const output = winningnum(arrary, bonusnum);
    Console.print('\n당첨 통계');
    Console.print('---');
    winningprint(output);
    rateprint(output, buyinput);
  }
}

export default App;
