import Controller from './Controller.js';

class App {
  async play() {
    const app = new Controller();
    await app.run();
  }
}

export default App;
