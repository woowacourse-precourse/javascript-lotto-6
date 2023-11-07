import User from './User';

class App {
  async play() {
    const user = new User();
    user.purchaseLotto();
  }
}

export default App;
