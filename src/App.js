import Prompter from "./utils/Prompter.js";

class App {
  async play() {
    // 구매 금액 입력받기
    const prompter = new Prompter();
    const question = '';
    const availableMoney = prompter.getUserInput(question);
  }
}

export default App;
