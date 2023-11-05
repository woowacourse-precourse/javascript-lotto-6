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
    if (!isNumber) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    };
  }
}

export default App;
