import { Console } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
import { LottoEvaluator } from './LottoEvaluator.js';

class LottoEvaluatorUI {
  constructor(lottoList, winningNumber, bounsNumber) {
    this.lottoList = lottoList;
    this.winningNumber = winningNumber;
    this.bounsNumber = bounsNumber;
  }

  printStatistics = () => {
    Console.print(`${Message.RESULT_STRING}`);
    const evaluator = new LottoEvaluator(
      this.lottoList,
      this.winningNumber,
      this.bounsNumber
    );
    const lottoResult = evaluator.evaluateLotto();
  };
}
export { LottoEvaluatorUI };
