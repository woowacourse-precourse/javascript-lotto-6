import setCashData from "./util/setCashData.js";
import setLottos from "./util/setLottos.js";

class App {
  async play() {
    let cash = //5000;
      await setCashData();

    let lottos = await setLottos(cash);
  }
}

export default App;
