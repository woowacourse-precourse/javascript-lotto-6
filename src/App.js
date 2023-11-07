import Controller from "./controller/Controller";
class App {
  async play() {
    const CONTROLLER = new Controller();
    await CONTROLLER.run();
  }
}

export default App;
