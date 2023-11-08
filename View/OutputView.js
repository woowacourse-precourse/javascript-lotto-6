import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/messages.js';

class OutputView {
  printAllLottos(lottoList) {
    Console.print(`${lottoList.length}${MESSAGE.bought}`);
    lottoList.forEach((lotto) => {
      Console.print(`[${lotto.getNumber().join(', ')}]`);
    });
  }

  printResult(winnerList) {
    Console.print(MESSAGE.result);
    Console.print(MESSAGE.commandLine);
    Console.print(
      `${MESSAGE.matchThree} - ${winnerList.fifth}개
${MESSAGE.matchFour} - ${winnerList.fourth}개
${MESSAGE.matchFive} - ${winnerList.third}개
${MESSAGE.matchfiveAndBonus} - ${winnerList.second}개
${MESSAGE.matchsix} - ${winnerList.first}개`,
    );
  }
}
export default OutputView;
