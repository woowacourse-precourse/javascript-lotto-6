import controller from "./controller/controller.js";

class App {
  constructor() {
    this.controller = new controller();
  }
  async play() {
    await this.controller.startLotto();
  }
}

export default App;
