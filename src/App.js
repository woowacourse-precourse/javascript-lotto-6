import { PlayView } from './View.js';

class App {
  async play() {
    const view = new PlayView();
    await view.viewFunction();

  }
}

export default App;
