import ConvertInputTo from './modules/ConvertInputTo.js';

class App {
  async play() {
    const lottoArray = await ConvertInputTo.lottoArray();
  }
}

export default App;
