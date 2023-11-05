import Controller from './controller/Controller.js';

export default class App {
  constructor() {
    this.controller = new Controller();
  }

  async play() {
    await this.controller.start();
  }
}
