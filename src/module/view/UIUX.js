import {MissionUtils} from "@woowacourse/mission-utils";
import LottoGenerator from "../model/LottoGenerator.js";
import WinNumber from "../model/WinNumber.js";
import Bonus from "../model/Bonus.js";
import WinnerDecider from "../model/WinnerDecider.js";
import EarningRate from "../controller/EarningRate.js";

class UIUX {
  #bunchOfLotto;
  #money;
  #number;
  #bonus;
  #score;

  async inputMoney() {
    try {
      const money = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');

      if (money % 1000 !== 0) {
        throw new Error('[ERROR] 1000으로 나누어 떨어지지 않습니다.');
      }

      this.#money = money;
    } catch (e) {
      MissionUtils.Console.print(e.message);
      await this.inputMoney();
    }
  }

  useLottoGenerator() {
    const lottoGenerator = new LottoGenerator(this.#money / 1000);
    this.#bunchOfLotto = lottoGenerator.lottoList;
  }

  printHowMuchBuying() {
    const data = this.#bunchOfLotto.length;
    MissionUtils.Console.print(`${data}개를 구매했습니다.`);
  }

  printLotto() {
    for (let i = 0; i < this.#bunchOfLotto.length; i += 1) {
      MissionUtils.Console.print(`[${this.#bunchOfLotto[i].numbers.join(', ')}]`);
    }
  }

  async inputNumber() {
    try {
      let number = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

      this.#number = number.split(',');
      this.#number = this.#number.map((e) => Number(e));

      const winNumber = new WinNumber(this.#number);

      this.#number = winNumber.numbers;
    } catch (e) {
      MissionUtils.Console.print(e.message);
      await this.inputNumber();
    }
  }

  async inputBonusNumber() {
    try {
      this.#bonus = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
      this.#bonus = Number(this.#bonus);

      const bonus = new Bonus(this.#bonus);

      this.#bonus = bonus.bonusNumber;

      if (this.#number.includes(this.#bonus)) throw new Error('[Error] 보너스 번호는 당첨 번호와 같을 수 없습니다.');
    } catch (e) {
      MissionUtils.Console.print(e.message);

      await this.inputBonusNumber();
    }
  }

  useWinnerDecider() {
    const winnerDecider = new WinnerDecider(this.#number, this.#bonus, this.#bunchOfLotto);

    this.#score = winnerDecider.score;
  }

  printScoreBanner() {
    MissionUtils.Console.print('당첨 통계\n---');
  }

  printScore() {
    const arr = ['three', 'four', 'five', 'bonus', 'six'];
    const msg = ['3개 일치 (5,000원) - ',
      '4개 일치 (50,000원) - ',
      '5개 일치 (1,500,000원) - ',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
      '6개 일치 (2,000,000,000원) - '
    ];

    for (let i = 0; i < arr.length; i += 1) {
      MissionUtils.Console.print(`${msg[i]}${this.#score[arr[i]]}개`);
    }
  }

  printEarningRate() {
    const earningRate = new EarningRate(this.#score, this.#money);

    MissionUtils.Console.print(`총 수익률은 ${earningRate.calEarningRate()}%입니다.`);
  }
}

export default UIUX;
