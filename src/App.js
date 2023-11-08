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
  #inputMoney;
  async play() {
    this.#inputMoney = await MissionUtils.Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
    const lottoCnt = getLottoCntFromInputMoney(this.#inputMoney);

    this.#lottoList = new LottoList(lottoCnt).getLottoList();

    const winningNumberStr = await MissionUtils.Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n'
    );
    const winningNumberArr = getWinningNumberArray(winningNumberStr);

    this.#winningLottoNumbers = new Lotto(winningNumberArr).getLotto();

    const inputBonusNumber = await MissionUtils.Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n'
    );
    this.#bonusNumber = new BounsNumber(inputBonusNumber).getBonusNumber();
    this.winningStat();
  }
  winningStat() {
    let sum = 0;
    const stat = [];
    const winningStat = {
      3: {
        message: '3개 일치 (5,000원)',
        count: 0,
        price: 5000,
      },
      4: {
        message: '4개 일치 (50,000원)',
        count: 0,
        price: 50000,
      },
      5: {
        false: { message: '5개 일치 (1,500,000원)', count: 0, price: 1500000 },
        true: {
          message: '5개 일치, 보너스 볼 일치 (30,000,000원)',
          count: 0,
          price: 30000000,
        },
      },
      6: {
        message: '6개 일치 (2,000,000,000원)',
        count: 0,
        price: 2000000000,
      },
    };
    this.#lottoList.forEach((lotto) => {
      let hit = lotto.filter((n) =>
        this.#winningLottoNumbers.includes(n)
      ).length;

      stat.push({
        hit,
        bonus: lotto.includes(this.#bonusNumber),
      });
    });

    stat.forEach((item) => {
      if (winningStat[item.hit]) {
        item.hit === 5
          ? winningStat[item.hit][item.bonus].count++
          : winningStat[item.hit].count++;
      }
    });

    Object.values(winningStat).forEach((item) => {
      if (item.message) {
        MissionUtils.Console.print(`${item.message} - ${item.count}개`);
        sum += item.price * item.count;
      } else {
        MissionUtils.Console.print(
          `${item.false.message} - ${item.false.count}개`
        );
        MissionUtils.Console.print(
          `${item.true.message} - ${item.true.count}개`
        );
        sum += item.false.price * item.false.count;
        sum += item.true.price * item.true.count;
      }
    });
    const totalReturnRate = ((sum / Number(this.#inputMoney)) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${totalReturnRate}%입니다.`);
  }
}

export default App;
