import { Console } from '@woowacourse/mission-utils';
import { Message } from './Message.js';
import { LottoEvaluator } from './LottoEvaluator.js';

class LottoEvaluatorUI {
  constructor(lottoList, winningNumber, bounsNumber, numberOfLotto) {
    this.lottoList = lottoList;
    this.winningNumber = winningNumber;
    this.bounsNumber = bounsNumber;
    this.numberOfLotto = numberOfLotto;
  }

  printStatistics = () => {
    Console.print(`${Message.RESULT_STRING}`);
    const evaluator = new LottoEvaluator(
      this.lottoList,
      this.winningNumber,
      this.bounsNumber
    );
    const lottoResult = evaluator.evaluateLotto();
    this.printLottoResult(lottoResult);
    this.printEarnings(lottoResult.earnings, this.numberOfLotto * 1000);
  };

  printLottoResult = (lottoResult) => {
    Console.print(`${Message.FIFTH}${lottoResult.fifth}개`);
    Console.print(`${Message.FOURTH}${lottoResult.fourth}개`);
    Console.print(`${Message.THIRD}${lottoResult.third}개`);
    Console.print(`${Message.SECOND}${lottoResult.second}개`);
    Console.print(`${Message.FIRST}${lottoResult.first}개`);
  };

  printEarnings = (earningMoney, investMoney) => {
    const total = ((earningMoney / investMoney) * 100).toFixed(2);
    const formattedTotal = parseFloat(total).toString();
    Console.print(`${Message.PRINT_RATE}${formattedTotal}%입니다.`);
  };
}
export { LottoEvaluatorUI };
