import { PlayView } from './View.js';

class App {
  async play() {
    const view = new PlayView();
    view.viewFunction();
    
  }
}

export default App;
