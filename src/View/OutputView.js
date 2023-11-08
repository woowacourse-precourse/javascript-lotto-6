import { INPUT_MESSAGES, OUPUT_MESSAGES } from '../Constants';

class OuputView {
  constructor() {}

  // 로또 구매 수량 출력
  printLottoCount(buyAmount) {
    Console.print(INPUT_MESSAGES.BUY_PRINT(buyAmount));
  }
  // 구매한 로또번호 출력
  printLottoNumbers(lottos) {
    const lottoCount = lottos.length;
    this.printLottoCount(lottoCount);
    for (let i = 0; i < lottoCount; i++) {
      Console.print(OUPUT_MESSAGES.BUY_LOTTOS(lottos[i]));
    }
    Console.print('\n');
  }

  // 당첨 현황 출력
  printWinningStatus() {}
  // 수익률 출력
  printProfit(profit) {
    Console.print(OUPUT_MESSAGES.PROFIT(profit));
  }
}

export default OuputView;
