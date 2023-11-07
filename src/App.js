import User from './User';

class App {
  async play() {
    const user = new User();
    const ticketCount = user.purchaseLotto();
  }
}

export default App;
