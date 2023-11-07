import { Random, Console } from "@woowacourse/mission-utils";

class LottoOutput {
  lottoCnt(money) {
    Console.print(`${money / 1000}개를 구매했습니다.`);
    this.printLottoNum(Number(money / 1000));
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
