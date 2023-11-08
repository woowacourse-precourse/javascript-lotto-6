import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message';
import { NUMBER_BY_RANK } from '../constants/constant';

class OutputView {
  printLineBreak(){
    Console.print('\n');
  }

  printTotalLotto(num){
    this.printLineBreak();
    Console.print(num + OUTPUT_MESSAGE.lottoCount);
  }

  printInput(input){
    Console.print(input);
  }

  printResultPhrase(){
    const { winStatistics, line } = OUTPUT_MESSAGE;
    Console.print(winStatistics);
    Console.print(line)
  }

  printTotalRank(rank, count){
    const order = NUMBER_BY_RANK[rank];
    Console.print(OUTPUT_MESSAGE[order] + count + OUTPUT_MESSAGE.unit);
  }

  printTotalProfit(profit){
    const { total, isEnd } = OUTPUT_MESSAGE;
    Console.print(total + profit + isEnd);
  }
}

export default OutputView;