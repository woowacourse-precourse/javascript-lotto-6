import UserInterface from "./UserInterface.js";
import LottoGame from "./LottoGame.js";

class App {
  async play() {
    const lottoPrice = await UserInterface.getLottoPrice();
    const lottoCount = lottoPrice / 1000;
    const lottos = LottoGame.generateLottos(lottoCount);

    UserInterface.displayLottos(lottos);
  }
}

export default App;
