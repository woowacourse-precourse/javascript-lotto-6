import MainController from './controllers/MainController.js';
class App {
  constructor() {
    this.mainController = new MainController();
  }

  async play() {
    await this.mainController.init();
  }
}

export default App;
