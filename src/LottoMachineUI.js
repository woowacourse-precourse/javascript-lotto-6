import { Console } from '@woowacourse/mission-utils';

class LottoMachineUI {
  printLottoList = (lottoList) => {
    for (let i = 0; i < lottoList.length; i++) {
      Console.print(`[${lottoList[i].join(', ')}]`);
    }
  };
}
export { LottoMachineUI };
