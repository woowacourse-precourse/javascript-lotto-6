import { MissionUtils } from '@woowacourse/mission-utils';
import {
  getLottoCntFromInputMoney,
  getWinningNumberArray,
} from './utils/getUserInput.js';
import LottoList from './repository/LottoList.js';
import Lotto from './repository/Lotto.js';
import BounsNumber from './repository/BonusNumber.js';

class App {
  async play() {
    const inputMoney = await MissionUtils.Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
    const lottoCnt = getLottoCntFromInputMoney(inputMoney);

    const lottoList = new LottoList(lottoCnt);

    const winningNumberStr = await MissionUtils.Console.readLineAsync(
      '당첨 번호를 입력해 주세요.\n'
    );
    const winningNumberArr = getWinningNumberArray(winningNumberStr);

    const winningLottoNumbers = new Lotto(winningNumberArr).getLotto();

    const inputBonusNumber = await MissionUtils.Console.readLineAsync(
      '보너스 번호를 입력해 주세요.\n'
    );
    const bonusNumber = new BounsNumber(inputBonusNumber);
  }
}

export default App;
