//
import { Console } from "@woowacourse/mission-utils";
//
import UserInput from "./UserInput.js";
import LottoGenerator from "./LottoGenerator.js";


class App {
  async play() {
	const inputs = new UserInput();
	const price = await inputs.inputPrice();
	const lottos = new LottoGenerator(price);

  }
}

export default App;
