import Inspector from "./utils/Inspector.js";
import LottoGenerator from "./utils/LottoGenerator.js";
import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 구매 금액 입력받기
    const QUESTION_MONEY = '구입금액을 입력해 주세요.';
    let availableMoney = await MissionUtils.Console.readLineAsync(QUESTION_MONEY);
    
    // 입력 예외 검사
    const inspector = new Inspector();
    inspector.containNumberOnly(availableMoney);
    inspector.getIsThousand(availableMoney);
    
    // 반복 수행 횟수 정하기
    availableMoney = Number(availableMoney);
    const lottoCount = availableMoney / 1000;
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    
    // 로또번호 뽑기
    const lottoGenerator = new LottoGenerator();
    const lottoNumbers = lottoGenerator.getMultipleLotto(lottoCount); // 배열 안에 배열 안에 숫자들 [[1,2,3,4,5,6],[...]]
    
    // 당첨 번호 입력받기
    const QUESTION_LOTTO = '당첨 번호를 입력해 주세요.';
    const winnerLotto = await MissionUtils.Console.readLineAsync(QUESTION_LOTTO); // winnerLotto = string;
    try { // 로또에 들어갈땐 배열로
      const lotto = new Lotto(winnerLotto.split(',').map(v=>Number(v)));
      // 보너스 번호 입력받기
      const QUESTION_BONUS = '보너스 번호를 입력해 주세요.';
      let bonusNumber = await MissionUtils.Console.readLineAsync(QUESTION_BONUS);
      bonusNumber = Number(bonusNumber);
      lotto.setBonusNumber(bonusNumber);

      // 당첨 여부 확인
      let totalPrice = 0;
      let winCount = {};
      lottoNumbers.forEach(async (lottoNumber) => {
        const compareCount = lotto.getCompareCount(lottoNumber);
        const isBonus = lotto.getIsBonus(lottoNumber);
        const order = lotto.getOrder(compareCount, isBonus);
        if (order > 5) {
          return;
        } else if (order <= 5) {
          winCount[order] = winCount[order] === undefined ?
          1 : winCount[order] + 1;
        }
        const money = lotto.getMoney(order);
        totalPrice += money;
      });   
      // 당첨 결과 출력
      lotto.printResult(winCount);

      // 수익률
      const rateReturn = totalPrice / availableMoney * 100
      MissionUtils.Console.print(`총 수익률은 ${rateReturn.toFixed(1)}%입니다.`);

    } catch (errorMsg) {
      MissionUtils.Console.print(errorMsg);
    }
  }
}

export default App;
