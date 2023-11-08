import getLottoPriceInput from "./components/getLottoPriceInput.js";

class App {
  async play() {
    const priceInput = await getLottoPriceInput();
  }
}

export default App;
