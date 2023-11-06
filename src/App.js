import AppService from './App.service.js';

class App {
  #AppService;

  constructor() {
    this.#AppService = new AppService();
  }

  async play() {
    await this.#AppService.setting();
  }
}

export default App;
