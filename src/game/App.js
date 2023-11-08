import Customer from "./Customer";
import lottoRanking from "./lottoRanking";
import inputHandlers from "../input/inputHandlers";

class App {
  #customer;

  async play() {
    // 초기화
    lottoRanking.initializeRanking();
  }
}

export default App;
