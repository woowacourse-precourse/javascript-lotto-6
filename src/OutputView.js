import { Console } from "@woowacourse/mission-utils";

class OutputView {
  
  printLottoNumbes(lottos) {
    Console.print(`\n${lottos.length}개를 구매하였습니다.`)
    lottos.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    })
  }

  printSpace() {
    Console.print('');
  }
}

export default OutputView;