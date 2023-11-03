import ConvertInputTo from './modules/ConvertInputTo.js';
import Print from './modules/Print.js';

class App {
  async play() {
    const lottoArray = await ConvertInputTo.lottoArray();
    Print.lineBreak();
    Print.purchasedLotto(lottoArray);
    Print.lineBreak();
  }
}

export default App;
