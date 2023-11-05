import InputView from "./views/InputView.js";

class App {
  async play() {
    const purchasePrice = await getPurchasePrice();
  }
}

const getPurchasePrice = async () => {
  const purchasePrice = await InputView.readPurchasePrice();
};

export default App;