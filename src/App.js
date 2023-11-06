import { getlottoCntFromInputMoney } from "./utils/getUserInput.js";


class App {
  async play() {
    const lottoCnt = await getlottoCntFromInputMoney();
    console.log(lottoCnt)

  }
}

export default App;
