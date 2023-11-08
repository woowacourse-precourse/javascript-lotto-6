import { MissionUtils } from '@woowacourse/mission-utils';
import LottoList from './repository/LottoList.js';
import UserInput from './UserInput.js';

class App {
  #lottoList;
  #winningLottoNumbers;
  #bonusNumber;
  #inputMoney;
  async play() {
    const userInput = new UserInput();

    this.#inputMoney = await userInput.getInputMoney();
    const lottoCnt = Number(this.#inputMoney) / 1000;
    this.#lottoList = new LottoList(lottoCnt).getLottoList();

    this.#winningLottoNumbers = await userInput.getWinningNumbers();

    this.#bonusNumber = await userInput.getBonusNumber();
    console.log(this.#bonusNumber);
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
