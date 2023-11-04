import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const purchasePrice = await MissionUtils.Console.readLineAsync(
      "구입금액을 입력해 주세요.\n"
    );
    const lottoCnt = this.repeatLottoNumber(purchasePrice);
    MissionUtils.Console.print("\n" + lottoCnt + "개를 구매했습니다.");
    const lottoArr = this.generateRandomNumber(lottoCnt);
    const winningNumbers = await MissionUtils.Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    MissionUtils.Console.print("\n당첨 통계\n---\n");
  }
  generateRandomNumber(lottoCnt) {
    const lottoArr = [];
    for(let i = 0 ; i < lottoCnt ; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      MissionUtils.Console.print(randomNumbers);
      lottoArr.push(randomNumbers);
    }
    return lottoArr;
  }
  repeatLottoNumber(purchasePrice) {
    const lottoCnt = purchasePrice / 1000;
    return lottoCnt;
  }
}

export default App;
