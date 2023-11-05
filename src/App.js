import Prompter from "./utils/Prompter.js";
import Inspector from "./utils/Inspector.js";
import LottoGenerator from "./utils/LottoGenerator.js";

class App {
  async play() {
    // 구매 금액 입력받기
    const prompter = new Prompter();
    const question = '';
    const availableMoney = await prompter.getUserInput(question);

    // 입력 예외 검사
    const inspector = new Inspector();
    const isNumber = inspector.containNumberOnly(availableMoney);
    const isThousand = inspector.getIsThousand(availableMoney);
    if (!isNumber || !isThousand) {
      throw new Error("[ERROR] 구입 금액은 1000으로 나누어떨어지는 숫자여야 합니다.");
    };
    
    // 반복 수행 횟수 정하기
    const lottoCount = availableMoney / 1000;
    
    // 로또번호 뽑기
    const lottoGenerator = new LottoGenerator();
    const lottoNumbers = lottoGenerator.getMultipleLotto(lottoCount);
    console.log(lottoNumbers)
  }
}

export default App;
