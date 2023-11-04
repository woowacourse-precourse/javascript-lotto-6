import { Console } from '@woowacourse/mission-utils';

class OutputView {  
  static displayNumberOfPurchase(numberOfPurchase) {
    Console.print(`\n${numberOfPurchase}개를 구매했습니다.`);
  }

  static displayLotto(lotto) {
    Console.print(lotto);
  }
}

export default OutputView;
