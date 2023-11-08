import { Console } from "@woowacourse/mission-utils";
import LottoGame from "./controller/LottoGameController";
import CreateModel from "./model/CreateModel";
import Input from "./view/InputView";
import Output from "./view/OutputView";
import MyLotto from "./model/MyLotto";
import Result from "./model/Result";

class App {
  async play() {
    const createModel = new CreateModel();
    const input = new Input();
    const output = new Output();
    const myLotto = new MyLotto(output);
    const result = new Result();

    const lottoGame = new LottoGame(createModel, input, output, myLotto, result);
    await lottoGame.lottoGamePlay();
  }
}

export default App;
