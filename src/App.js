import Computer from "./Computer.js";

class App {
  async play() {
    const computer = Computer.createComputer();
    computer.startLottoSimulation();
  }
}

export default App;
