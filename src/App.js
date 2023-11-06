import RunApp from "./RunApp.js";

class App {
  async play() {
    const run = new RunApp();
    await run.main();
  }
}

export default App;
