import InputManager from './InputManager.js';

class App {
  async play() {
    const inputManager = new InputManager();
    await inputManager.enterAmount();
  }
}

export default App;
