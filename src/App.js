import ConvertInputTo from './modules/ConvertInputTo.js';
import Print from './modules/Print.js';

class App {
  async play() {
    const lottoArray = await ConvertInputTo.lottoArray();
    Print.purchasedLotto(lottoArray);
  }
}

export default App;
