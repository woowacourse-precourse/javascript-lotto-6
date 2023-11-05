import UserInterface from "./UserInterface.js";

class App {
  async play() {
    const lottoPrice = await UserInterface.getLottoPrice();
  }
}

export default App;
