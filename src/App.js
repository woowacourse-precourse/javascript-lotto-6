import LottoGame from "./controller/LottoGameController";
import Purchase from "./model/Purchase";
import CreateModel from "./model/CreateModel";
import Input from "./view/InputView";
import Output from "./view/OutputView";

class App {
  async play() {
    const createModel = new CreateModel();
    const purchase = new Purchase();
    const input = new Input();
    const output = new Output();

    const lottoGame = new LottoGame(createModel, purchase, input, output);
    await lottoGame.lottoGamePlay();
  }
}

export default App;
