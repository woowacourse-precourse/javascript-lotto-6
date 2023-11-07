import { Lotto } from "./Lotto.js";
import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { LOTTO_RANGE, ERROR_MESSAGE } from "./constants/constants";

class App {
  async play() {
    //로또 숫자가 맞는지 확인하는 함수
    const lottoCount = async () => {
      let buyCount;
      while (true) {
        buyCount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        try {
          if (Number.isNaN(Number(buyCount)) === false) {
            throw new Error(ERROR_MESSAGE.lottoForm);
          }
          if (Number(buyCount) % 1000 !== 0) {
            throw new Error(ERROR_MESSAGE.lottoDevide);
          }
          // 유효한 입력을 받았을 경우 반복문 탈출
          break;
        } catch (err) {
          // 에러 메시지 출력 후 다시 입력 받음
          console.error("[ERROR]");
        }
      }
      return Number(buyCount) / 1000;
    }
    const buyCount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const userLottoCnt = lottoCount(buyCount); //로또 갯수를 반환
    


    // const winNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

    // const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    

    }
  }

export default App;