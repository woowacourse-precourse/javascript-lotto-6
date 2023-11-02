import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printLottoCnt(lottoCnt) {
    this.printNewLine();
    Console.print(`${lottoCnt}개를 구매했습니다.`);
  }

  static printNewLine() {
    Console.print("");
  }

  static printLottoNumbers(lotto) {
    Console.print(lotto);
  }
}

export default OutputView;