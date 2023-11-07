import { MissionUtils } from '@woowacourse/mission-utils';
import {
  getLottoCntFromInputMoney,
  getWinningNumberArray,
} from './utils/getUserInput.js';
import LottoList from './repository/LottoList.js';
import Lotto from './repository/Lotto.js';
import BounsNumber from './repository/BonusNumber.js';

class App {
  #lottoList;
  #winningLottoNumbers;
  #bonusNumber;
  async play() {
    const inputMoney = await MissionUtils.Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
    const lottoCnt = getLottoCntFromInputMoney(inputMoney);

    this.#lottoList = new LottoList(lottoCnt).getLottoList();

    const winningNumberStr = await MissionUtils.Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    const winningNumberArr = getWinningNumberArray(winningNumberStr);

    this.#winningLottoNumbers = new Lotto(winningNumberArr).getLotto();

    const inputBonusNumber = await MissionUtils.Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    this.#bonusNumber = new BounsNumber(inputBonusNumber);
    this.winningStat();
  }
  winningStat() {
    let stat = [];
    this.#lottoList.forEach((lotto) => {
      let hit = lotto.filter((n) =>
        this.#winningLottoNumbers.includes(n)
      ).length;

      stat.push({
        hit,
        bonus: lotto.includes(this.#bonusNumber),
      });
    });
  }
}

export default App;
