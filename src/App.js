import Lotto from "./Lotto";
import Price from "./Price";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const MESSAGE1 = '구입금액을 입력해 주세요.';
    const MESSAGE2 = '당첨 번호를 입력해 주세요.';
    const MESSAGE3 = '보너스 번호를 입력해 주세요.';
    const MESSAGE4 = '당첨 통계';
    
    let purchaseAmountStatus = true;
    let lottoNumberStatus = true;
    let bonusNumberStatus = true;
    let purchaseAmount;
    let lottoNumber;
    let bonusNumber;
    let purchaseCount;
    let lottoNumbersArray;

    do {
      try {
        purchaseAmount = await MissionUtils.Console.readLineAsync(MESSAGE1);
        const price = new Price(purchaseAmount);
        purchaseAmount = price.getPrice();
        purchaseCount = purchaseAmount/1000;
        purchaseAmountStatus = false;
        MissionUtils.Console.print(`${purchaseCount}개를 구매했습니다.`);
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    } while (purchaseAmountStatus);

    let randomLottoArray = [];
    
    for (let i = 0 ; i < purchaseCount ; i++ ) {
      randomLottoArray[i] = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);   
    }

    randomLottoArray.sort((a, b) => a - b);
    randomLottoArray.forEach((v) => {
      const stringValue = `[${v.join(', ') }]`;
      MissionUtils.Console.print(stringValue);
    });

    do {
      try {
        lottoNumber = await MissionUtils.Console.readLineAsync(MESSAGE2);
        const lotto = new Lotto(lottoNumber.split(",").map(Number));
        lottoNumbersArray = lotto.getNumbers();
        lottoNumberStatus = false;
      } catch (error) {
        MissionUtils.Console.print(error);
      }
    } while (lottoNumberStatus);

    do {
      try {
        bonusNumber = await MissionUtils.Console.readLineAsync(MESSAGE3);

        if (!(bonusNumber >= 1 && bonusNumber <= 45)) {
          throw new Error("[ERROR] 보너스 번호는 1부터 45사이의 숫자여야 합니다.");
        }

        bonusNumberStatus = false;
      } catch (error) {
        MissionUtils.Console.print(error);
      }
    } while (bonusNumberStatus);

    let win3 = 0;
    let win4 = 0;
    let win5 = 0;
    let win5WithBonus = 0;
    let win6 = 0;

    for (const ticket of randomLottoArray) {
      const matchedNumbers = ticket.filter(num => lottoNumbersArray.includes(num));
      const matchedCount = matchedNumbers.length;

      if (matchedCount === 3) {
        win3++;
      } else if (matchedCount === 4) {
        win4++;
      } else if (matchedCount === 5) {
        if (matchedNumbers.includes(bonusNumber)) {
          win5WithBonus++;
        } else {
          win5++;
        }
      } else if (matchedCount === 6) {
        win6++;
      }
    }

    MissionUtils.Console.print(MESSAGE4);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${win3}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${win4}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${win5}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${win5WithBonus}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${win6}개`);

    const totalPrize = win3 * 5000 + win4 * 50000 + win5 * 1500000 + win5WithBonus * 30000000 + win6 * 2000000000;
    const totalCost = purchaseAmount;
    const profitRate = ((totalPrize / totalCost) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);    
  }
}

export default App;