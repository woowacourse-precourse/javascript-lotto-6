import LottoInput from "./LottoInput";
import { Random, Console } from "@woowacourse/mission-utils";

class LottoOutput {
  printLottoCnt() {
    const lottoInput = new LottoInput();
    Console.print(`${lottoInput / 1000}개를 구매했습니다.`);

    this.printLottoNum(Number(lottoInput / 1000));
  }
}

export default LottoOutput;
