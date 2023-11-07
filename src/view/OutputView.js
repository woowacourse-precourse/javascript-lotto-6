import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message';

class OutputView {
  printLineBreak(){
    Console.print('\n');
  }

  printTotalLotto(num){
    this.printLineBreak();
    return Console.print(`${num}${OUTPUT_MESSAGE.lottoCount}`)
  }

  printInput(input){
    return Console.print(input);
  }
}

export default OutputView;