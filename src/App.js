import Controller from './controller/Controller.js';

class App {
  async play() {
    const controller = new Controller();
    controller.start();
  }
}

export default App;
