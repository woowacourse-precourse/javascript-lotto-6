import calculate from './calculate.js';
import excutionNumber from './excutionNumber.js';
import results from './results.js';
import rateOfReturn from './rateOfReturn.js';
import resultView from './resultView.js';
import getValidPrice from './getValidPrice.js';
import numberValid from './numberValid.js';
import bonusNumberValid from './bonusNumberValid.js';

class App {
  async play() {
    const price = await getValidPrice();
    const excution = excutionNumber(price);
    resultView(excution, price);
    const number = await numberValid();
    const bonusNumber = await bonusNumberValid(number);
    const result = calculate(excution, number, bonusNumber);
    const rate = rateOfReturn(price, result);
    results(result, rate);
  }
}

const app = new App();
app.play();
export default App;
