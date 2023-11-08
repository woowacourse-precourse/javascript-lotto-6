import Prompter from "./utils/Prompter.js";
import Inspector from "./utils/Inspector.js";
import LottoGenerator from "./utils/LottoGenerator.js";
import Lotto from "./Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 구매 금액 입력받기
    const prompter = new Prompter();
    const QUESTION_MONEY = '구입금액을 입력해 주세요.';
    const availableMoney = await prompter.getUserInput(QUESTION_MONEY);

    // 입력 예외 검사
    const inspector = new Inspector();
    inspector.containNumberOnly(availableMoney);
    inspector.getIsThousand(availableMoney);
    
    // 반복 수행 횟수 정하기
    const lottoCount = availableMoney / 1000;
    
    // 로또번호 뽑기
    const lottoGenerator = new LottoGenerator();
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumber = await lottoGenerator.getLottoNumber();
      MissionUtils.Console.print(lottoNumber);
    }

    // // 당첨 번호 입력받기
    const QUESTION_LOTTO = '당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.';
    const winnerLotto = await prompter.getUserInput(QUESTION_LOTTO);
    const splited = inspector.getSplited(winnerLotto);
    const ableWinnerLotto = splited ? inspector.getIsAble(splited) : null;
    const lotto = new Lotto(ableWinnerLotto);

    // // 보너스 번호 입력받기
    const QUESTION_BONUS = '보너스 번호를 입력해 주세요.';
    const bonusNumber = await prompter.getUserInput(QUESTION_BONUS);
    const isDuplicate = inspector.getIsDuplicate(winnerLotto, bonusNumber);
    console.log(isDuplicate);
  }
}

export default App;
