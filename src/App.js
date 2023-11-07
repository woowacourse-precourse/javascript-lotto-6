import { MissionUtils } from '@woowacourse/mission-utils';
import {
  getLottoCntFromInputMoney,
  getWinningLottoArray,
} from './utils/getUserInput.js';
import LottoList from './repository/LottoList.js';

class App {
  async play() {
    const inputMoney = await MissionUtils.Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
    const lottoCnt = getLottoCntFromInputMoney(inputMoney);

    const lottoList = new LottoList(lottoCnt);

    const winningNumberStr = await MissionUtils.Console.readLineAsync(
      '당첨 번호를 입력해 주세요.'
    );
    const winningLottoArr = getWinningLottoArray(winningNumberStr);
  }
}

export default App;
