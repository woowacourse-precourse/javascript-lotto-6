import Prompter from "./utils/Prompter.js";
import Inspector from "./utils/Inspector.js";

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


  }
}

export default App;
