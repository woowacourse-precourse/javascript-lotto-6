import Lotto from "./Lotto.js";
import LottoController from "./LottoController.js";
import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { LOTTO_RANGE, ERROR_MESSAGE, PRIZE_MESSAGE } from "./constants/constants";

class App {
  async play() {

    //로또 숫자가 맞는지 확인하는 함수
    const lottoCount = async () => {
      const buyCount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      try {
        if (isNaN(Number(buyCount)) || Number(buyCount) % 1000 !== 0) {
          throw new Error(ERROR_MESSAGE.lottoForm);
        }
      } catch (err) {
        Console.print("[ERROR]");
        return lottoCount();
      }
      return Number(buyCount) / 1000;
    }

    // 로또를 만드는 함수
    const buyLottoCnt = await lottoCount(); //로또 갯수를 반환
    Console.print(`${buyLottoCnt}개를 구매했습니다.`);
    const userLotto = new LottoController(buyLottoCnt);
    const buyLotto = userLotto.makeLotto();
    
    //당첨번호 저장하는 부분
    const winInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const bonusInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    let tmp = winInput.split(",").map(Number);
    const winNumber = await new Lotto(tmp);

    const prizeCounts = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };

    const prizeValue = {
      3: 5000,
      4: 50000,
      5: 1500000,
      5.5: 30000000,
      6: 2000000000,
    };
    //로또 번호 비교
    buyLotto.forEach(ticket => {
      const result = winNumber.compareLotto(ticket); // ticket는 각 로또 티켓을 나타내는 배열
      let sameNumber = result.length;
      if (result.length == 5 && arr.includes(bonusInput)) {
        sameNumber += 0.5;
      }
      if (sameNumber >= 3 && sameNumber <= 6) {
        prizeCounts[sameNumber] += 1;
      }
    });
    let rateOfReturn = 0;
    // 로또 갯수 출력
    for (const [count, prize] of Object.entries(prizeCounts)) {
      Console.print(`${PRIZE_MESSAGE[count]} - ${prize}개`);
      rateOfReturn += (prize * prizeValue[count]);
    }
    rateOfReturn = rateOfReturn / (buyLottoCnt*1000);
    Console.print(`총 수익률은 ${rateOfReturn*100}%입니다.`);

  }
}

export default App;