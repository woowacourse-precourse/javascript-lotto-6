import Print from "./Print.js";

class App {
  async play() {
    const sum = await Print.getPurchaseSum();
    console.log(sum);
  }
}

export default App;
