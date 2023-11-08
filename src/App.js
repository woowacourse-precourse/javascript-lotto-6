import Lotto from "./Lotto.js";
import LottoController from "./LottoController.js";
import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { LOTTO_RANGE, ERROR_MESSAGE } from "./constants/constants";

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
    
    //당첨번호 저장하는 함수
    const winInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    let tmp = winInput.split(",").map(Number);
    const winNumber = await new Lotto(tmp);

    
    }
  }

export default App;