import User from './User.js';

class App {
  async play() {
    this.user = new User();
    await this.user.buy();
  }
}

export default App;
