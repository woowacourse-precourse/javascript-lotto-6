import LottoInput from "./LottoInput";
import { Random, Console } from "@woowacourse/mission-utils";

class LottoOutput {
  lottoCnt() {
    const lottoInput = new LottoInput();
    Console.print(`${lottoInput / 1000}개를 구매했습니다.`);

    this.printLottoNum(Number(lottoInput / 1000));
  }

  printLottoNum(userCnt) {
    const lottoNumArr = [];
    for (let i = 0; i < userCnt; i++) {
      const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(lottoNum);
      lottoNumArr.push(lottoNum);
    }
  }
}

export default LottoOutput;
