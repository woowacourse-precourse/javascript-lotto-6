import Input from './Input.js';

class App {
  async play() {
    await Input.getLottoBudget();
  }
}

export default App;
