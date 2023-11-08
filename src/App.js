import InputController from './controller/InputController.js';

class App {
  async play() {
    const inputController = new InputController();
    await inputController.inputStart();
  }
}

export default App;
