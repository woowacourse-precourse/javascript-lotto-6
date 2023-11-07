import LottoGame from "./controller/LottoGameController";
import CreateModel from "./model/CreateModel";
import Input from "./view/InputView";
import Output from "./view/OutputView";
import MyLotto from "./model/MyLotto";

class App {
  async play() {
    const createModel = new CreateModel();
    const input = new Input();
    const output = new Output();
    const myLotto = new MyLotto(output);

    const lottoGame = new LottoGame(createModel, input, output, myLotto);
    await lottoGame.lottoGamePlay();
  }
}

export default App;
