/* eslint-disable default-case */
import Lotto from './Lotto.js';
import InputAmount from './InputAmount.js';
import Print from './PrintResults.js';
import WinNumbers from './WinNumbers.js';
import OrganizeResults from './OrganizeResults.js';

class App {
  async play() {
    const inputAmount = new InputAmount();
    const published = inputAmount.Published;
    const count = await inputAmount.inputAmount() / 1000;
    inputAmount.publishLotto(count);
    
    const print = new Print();
    print.printLottoNumbers(published);

    const winNumbers = new WinNumbers();
    const inputNumbers = await winNumbers.getNumbers();
    
    const lotto = new Lotto(inputNumbers);
    const bonus = await winNumbers.getBonus(inputNumbers);
    
    const organizeResult = new OrganizeResults();
    organizeResult.organizeRank(lotto, published, bonus);
    const rate = organizeResult.calculateRate(published);

    print.printResults(published, print.styleRate(rate));
  }
}

const app = new App();
app.play();

export default App;
