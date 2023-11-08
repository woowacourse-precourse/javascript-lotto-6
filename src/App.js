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
    const lottoNumbers = lottoGenerator.getMultipleLotto(lottoCount);

    // 당첨 번호 입력받기
    const QUESTION_LOTTO = '당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.';
    const winnerLotto = await prompter.getUserInput(QUESTION_LOTTO);
    const splited = inspector.getSplited(winnerLotto);
    const ableWinnerLotto = splited ? inspector.getIsAble(splited) : null;

    // 보너스 번호 입력받기
    const QUESTION_BONUS = '보너스 번호를 입력해 주세요.';
    const bonusNumber = await prompter.getUserInput(QUESTION_BONUS);
    inspector.getIsDuplicate(winnerLotto, bonusNumber);

    // 로또 생성 (이제 못바꿈)
    const lotto = new Lotto(ableWinnerLotto, bonusNumber);

    // 당첨 여부 확인
    lottoNumbers.forEach(async (lottoNumber) => {
      const compareCount = await lotto.getCompareCount(lottoNumber);
      const isBonus = await lotto.getIsBonus(lottoNumber);
    });
  }
}

export default App;
