import lottoPriceInput from "./LottoPriceInput.js";
import numberVerification from "./NumberVerification.js";
import addNumber from "./addNumber.js";
import bonusNumber from "./bonusNumber.js";
import excutionNumber from "./excutionNumber.js";
import playerNumber from "./playerNumber.js";
import priceCheck from "./priceCheck.js";
import verificationBounsNumber from "./verficationBonusNumber.js";

class App {
  async play() {
    const price = await lottoPriceInput("구입금액을 입력해 주세요.");
    const purchase = priceCheck(price);
    const excution = excutionNumber(purchase);
    const playerAnswer = await playerNumber("당첨 번호를 입력해 주세요.");
    console.log(excution);
    const verificationNumber = numberVerification(playerAnswer);
    const bonusNumberAnswer = await bonusNumber("보너스 번호를 입력해 주세요.");
    const bounsNumberverification = verificationBounsNumber(bonusNumberAnswer);
    const numberAdd = addNumber(verificationNumber, bounsNumberverification);
  }
}

const app = new App();
app.play();
export default App;
