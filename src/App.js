import controller from "./controller/controller";

class App {

  async play() {
    const game = new controller();
    await game.play();
  }
}

export default App;
