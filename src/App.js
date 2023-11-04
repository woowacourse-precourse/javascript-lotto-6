import controller from "./controller/Controller.js";

class App {
  async play() {
    await controller.initHandler();
  }
}

export default App;
