import Prompter from "./utils/Prompter.js";
import Inspector from "./utils/Inspector.js";
import LottoGenerator from "./utils/LottoGenerator.js";
import Lotto from "./Lotto.js";

class App {
  async play() {
    // 구매 금액 입력받기
    const prompter = new Prompter();
    const QUESTION_MONEY = '로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.';
    const availableMoney = await prompter.getUserInput(QUESTION_MONEY);

    // 입력 예외 검사
    const inspector = new Inspector();
    const isNumber = inspector.containNumberOnly(availableMoney);
    const isThousand = inspector.getIsThousand(availableMoney);
    if (!isNumber || !isThousand) {
      throw new Error("[ERROR] 구입 금액은 1000으로 나누어떨어지는 숫자여야 합니다.");
    };
    
    // 당첨 번호 입력받기
    const QUESTION_LOTTO = '당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.';
    const winnerLotto = await prompter.getUserInput(QUESTION_LOTTO);
    const splited = inspector.getSplited(winnerLotto);
    const ableWinnerLotto = splited ? inspector.getIsAble(splited) : null;
    const lotto = new Lotto(ableLotto);

    // 반복 수행 횟수 정하기
    const lottoCount = availableMoney / 1000;
    
    // 로또번호 뽑기
    const lottoGenerator = new LottoGenerator();
    const lottoNumbers = lottoGenerator.getMultipleLotto(lottoCount);
    console.log(lottoNumbers)
  }
}

export default App;
