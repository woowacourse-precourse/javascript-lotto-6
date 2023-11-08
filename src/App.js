import Computer from "./Computer.js";

class App {
  async play() {
    const computer = Computer.createComputer()
    await computer.simulateLotto();
  }
}

export default App;
