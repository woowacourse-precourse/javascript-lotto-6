import lottoPriceInput from './LottoPriceInput.js';
import numberVerification from './NumberVerification.js';
import bonusNumber from './bonusNumber.js';
import calculate from './calculate.js';
import excutionNumber from './excutionNumber.js';
import playerNumber from './playerNumber.js';
import priceCheck from './priceCheck.js';
import verificationBounsNumber from './verificationBonusNumber.js';
import results from './results.js';
import rateOfReturn from './rateOfReturn.js';
import resultView from './resultView.js';

class App {
  async play() {
    const price = await lottoPriceInput('구입금액을 입력해 주세요.');
    const purchase = priceCheck(price);
    const excution = excutionNumber(purchase);
    resultView(excution, purchase);
    const playerAnswer = await playerNumber('당첨 번호를 입력해 주세요.');
    const verificationNumber = numberVerification(playerAnswer);
    const bonusNumberAnswer = await bonusNumber('보너스 번호를 입력해 주세요.');
    const bounsNumberverification = verificationBounsNumber(
      bonusNumberAnswer,
      verificationNumber,
    );
    const result = calculate(
      excution,
      verificationNumber,
      bounsNumberverification,
    );
    const rate = rateOfReturn(price, result);
    results(result, rate);
  }
}

const app = new App();
app.play();
export default App;
