import Computer from "./feat/Computer.js";

class App {
  async play() {
    const computer = new Computer();
    computer.issuanceLotto(5);
  }
}
const app = new App();
app.play();
export default App;
