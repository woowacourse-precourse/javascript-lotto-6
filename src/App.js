import Controller from "../domain/Controller.js";;


class App {
  constructor() {
    this.myPlay = new Controller();
  }

  async play() {
    await this.myPlay.play();
  }
}

export default App;