import Computer from "./Computer.js";

class App {
  async play() {
    Computer.createComputer().simulateLotto();
  }
}

export default App;
