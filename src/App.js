import Controller from "./controller/controller";

class App {

  async play() {
    const game = new Controller();
    await game.play();
  }
}

export default App;
