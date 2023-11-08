import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';

class App {

  printResult = (result) => {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');

    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result[4]}개`);
  }

  calculateLottoCount = async () => {
    while(true) {
      try {
        const money = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
        
        if (isNaN(money)) throw new Error("[ERROR] 구입금액은 숫자여야 합니다.");
        if (parseInt(money / 1000) !== money / 1000) throw new Error("[ERROR] 구입금액은 1000원 단위여야 합니다.");
        if (money == 0) throw new Error("[ERROR] 구입금액은 0원 이상이어야 합니다.");  

        const  count = money / 1000;
        MissionUtils.Console.print(`${count}개를 구매했습니다.`);
        return count;
      } catch(error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  inputBonus = async (win) => {
    while(true) {
      try {
        const bonus = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
        if (isNaN(parseInt(bonus))) throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
        if (1 > bonus || bonus > 45) throw new Error("[ERROR] 보너스 번호는 1~45 사이여야 합니다.");
        if (win.includes(bonus)) throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
        return bonus;
      } catch(error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  printLottoNumbers = (lottoList) => {
    lottoList.forEach((lottoNumbers) => {
      MissionUtils.Console.print(`[${lottoNumbers.join(', ')}]`);
    });
  }

  calculateTotalPrize = (stats) => {
    let total = 0;
    total += stats[0] * 5000;
    total += stats[1] * 50000;
    total += stats[2] * 1500000;
    total += stats[3] * 30000000;
    total += stats[4] * 2000000000;
    return total;
  }
  earningsRate = (stats, count) => {
    const totalPrize = this.calculateTotalPrize(stats);
    return (totalPrize / (count * 1000) * 100).toFixed(1);
  }

  createLotto = (count) => {
    const lottoList = [];
    while(count--) {
      lottoList.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
    }
    return lottoList;
  }
  
  async play() {
    let count = await this.calculateLottoCount();
    const lottoList = this.createLotto(count);
    this.printLottoNumbers(lottoList);
    const win = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const lotto = new Lotto(win.split(',').map(v=>Number(v)));
    const bonus = await this.inputBonus(win);
    const result = lotto.stats(lottoList, bonus);
    this.printResult(result);
    MissionUtils.Console.print(`총 수익률은 ${this.earningsRate(result, count)}%입니다.`);
  }
}

export default App;
