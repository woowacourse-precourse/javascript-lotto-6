import Controls from './Controls.js';

class App {
  async play() {
    const bet = await Controls.getBet();
    console.log(bet);
  }
}

export default App;
